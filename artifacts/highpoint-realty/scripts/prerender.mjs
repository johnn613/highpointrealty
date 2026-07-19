import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const routes = [
  "/",
  "/listings",
  "/current-auctions",
  "/past-auctions",
  "/videos",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
];

async function prerender() {
  const template = readFileSync(resolve(root, "dist/public/index.html"), "utf-8");
  const { render } = await import(resolve(root, "dist/server/entry-server.js"));

  let ok = 0;
  let fail = 0;

  for (const route of routes) {
    try {
      const appHtml = render(route);
      const html = template.replace("<!--app-html-->", appHtml);
      const outDir =
        route === "/" ? resolve(root, "dist/public") : resolve(root, `dist/public${route}`);
      mkdirSync(outDir, { recursive: true });
      writeFileSync(resolve(outDir, "index.html"), html);
      console.log(`  ✓ ${route}`);
      ok++;
    } catch (err) {
      console.error(`  ✗ ${route}: ${err.message}`);
      fail++;
    }
  }

  console.log(`\nPrerender complete: ${ok} succeeded, ${fail} failed`);
  if (fail > 0 && ok === 0) process.exit(1);
}

prerender().catch((err) => {
  console.error("Prerender fatal error:", err);
  process.exit(1);
});
