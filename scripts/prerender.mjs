import { build } from "vite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");

async function prerender() {
  // Build the SSR bundle
  await build({
    root: rootDir,
    build: {
      ssr: true,
      outDir: "dist/ssr",
      rollupOptions: {
        input: "src/entry-prerender.tsx",
      },
    },
    ssr: {
      // Bundle everything so the output is self-contained
      noExternal: true,
    },
  });

  // Import the SSR bundle
  const { render, routes } = await import(
    path.resolve(distDir, "ssr/entry-prerender.js")
  );

  // Read the client-side index.html template
  const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

  for (const route of routes) {
    const { html: appHtml, helmet } = render(route);

    // Inject rendered HTML into the template
    let page = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // Inject helmet head tags if available
    if (helmet) {
      const headTags = [
        helmet.title?.toString(),
        helmet.meta?.toString(),
        helmet.link?.toString(),
        helmet.script?.toString(),
      ]
        .filter(Boolean)
        .join("\n    ");

      if (headTags) {
        page = page.replace("</head>", `    ${headTags}\n  </head>`);
      }
    }

    // Write to dist/<route>/index.html
    const outDir =
      route === "/" ? distDir : path.join(distDir, route.slice(1));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), page);
    console.log(`Prerendered: ${route}`);
  }

  // Clean up SSR build
  fs.rmSync(path.join(distDir, "ssr"), { recursive: true, force: true });
  console.log("Prerendering complete!");
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
