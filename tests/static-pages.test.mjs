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
  assert.match(html, /href="styles\.css\?v=20260928-news"/i);
  assert.match(html, /<title>Shuo Zhang \| Personal Homepage<\/title>/i);
  assert.match(html, /second-year Ph\.D\. student in the Department of Statistics/i);
  assert.match(html, /<h2>Interests<\/h2>/i);
  assert.match(html, /particularly post-training/i);
  assert.match(html, /<h2 id="news-title">News<\/h2>/i);
  assert.match(html, /Local Reward Refinement for Long-Horizon Trajectories/i);
  assert.match(html, /work focuses on controlled sequential tasks/i);
  assert.match(html, /github\.com\/ShuoZhang021022\/local-reward-refinement-for-long-horizon-trajectories/i);
  assert.match(html, /src="state-branch-diagram\.png"/i);
  assert.match(html, /State branching diagram with near-zero advantages/i);
  assert.match(html, /Learning an LLM Agent's Harness with GRPO/i);
  assert.match(html, /github\.com\/ShuoZhang021022\/harness-grpo-lab/i);
  const harnessArticle = [...html.matchAll(/<article\b[^>]*>[\s\S]*?<\/article>/g)]
    .map(([article]) => article)
    .find((article) => article.includes("harness-grpo-lab"));
  assert.match(harnessArticle ?? "", /src="agent-tool-flow\.png"/i);
  assert.match(harnessArticle ?? "", /Agent creates and selects tools from a tool pool/i);
  assert.match(html, /Passive-Judge Training and Test-Time Actor–Judge Selection for Code Repair/i);
  assert.match(html, /github\.com\/ShuoZhang021022\/actor-judge-code-repair-3\.0/i);
  const actorJudgeArticle = [...html.matchAll(/<article\b[^>]*>[\s\S]*?<\/article>/g)]
    .map(([article]) => article)
    .find((article) => article.includes("actor-judge-code-repair-3.0"));
  assert.match(actorJudgeArticle ?? "", /src="actor-judge-flow\.png"/i);
  assert.match(actorJudgeArticle ?? "", /Actor and Judge provide inputs that combine into a final decision/i);
  assert.doesNotMatch(html, /<article class="news-item news-item--text-only">/i);
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
    access(new URL("state-branch-diagram.png", pagesRoot)),
    access(new URL("agent-tool-flow.png", pagesRoot)),
    access(new URL("actor-judge-flow.png", pagesRoot)),
    access(new URL("../.nojekyll", pagesRoot)),
    access(new URL("../favicon.svg", pagesRoot)),
    access(new URL("../og.png", pagesRoot)),
    access(new URL("../shuo-zhang.jpg", pagesRoot)),
    access(new URL("../state-branch-diagram.png", pagesRoot)),
    access(new URL("../agent-tool-flow.png", pagesRoot)),
    access(new URL("../actor-judge-flow.png", pagesRoot)),
    access(new URL("../public/agent-tool-flow.png", pagesRoot)),
    access(new URL("../public/actor-judge-flow.png", pagesRoot)),
  ]);
});
