import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const pagesRoot = new URL("../github-pages/", import.meta.url);

test("GitHub Pages artifact contains the complete English homepage", async () => {
  const html = await readFile(new URL("index.html", pagesRoot), "utf8");
  const css = await readFile(new URL("styles.css", pagesRoot), "utf8");
  const rootHtml = await readFile(new URL("../index.html", pagesRoot), "utf8");
  const rootCss = await readFile(new URL("../styles.css", pagesRoot), "utf8");

  assert.match(html, /<html lang="en">/i);
  assert.match(html, /<title>Shuo Zhang \| Personal Homepage<\/title>/i);
  assert.match(html, /second-year Ph\.D\. student in the Department of Statistics/i);
  assert.match(html, /<h2>Interests<\/h2>/i);
  assert.match(html, /particularly post-training/i);
  assert.match(html, /mailto:shuozhang2002@uchciago\.edu/i);
  assert.match(html, /https:\/\/github\.com\/ShuoZhang021022/i);
  assert.match(html, /src="shuo-zhang\.jpg"/i);
  assert.match(html, /rel="canonical" href="https:\/\/shuozhang021022\.github\.io\/"/i);
  assert.doesNotMatch(html, /Selected Work|Recent News|Current Focus|Open To|Scholar|Contact/);

  assert.match(css, /background:\s*#fff/i);
  assert.match(css, /@media \(max-width: 680px\)/i);
  assert.equal(rootHtml, html);
  assert.equal(rootCss, css);

  await Promise.all([
    access(new URL(".nojekyll", pagesRoot)),
    access(new URL("favicon.svg", pagesRoot)),
    access(new URL("og.png", pagesRoot)),
    access(new URL("shuo-zhang.jpg", pagesRoot)),
    access(new URL("../.nojekyll", pagesRoot)),
    access(new URL("../favicon.svg", pagesRoot)),
    access(new URL("../og.png", pagesRoot)),
    access(new URL("../shuo-zhang.jpg", pagesRoot)),
  ]);
});
