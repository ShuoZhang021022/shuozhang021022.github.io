import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html", host: "localhost" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the English personal homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="en">/i);
  assert.match(html, /<title>Shuo Zhang \| Personal Homepage<\/title>/i);
  assert.match(html, /<h1[^>]*>Shuo Zhang<\/h1>/i);
  assert.match(html, /second-year Ph\.D\. student in the Department of Statistics/i);
  assert.match(html, /large language models \(LLMs\) and statistics/i);
  assert.match(html, /University of Science and Technology of China/i);
  assert.match(html, /<h2>Interests<\/h2>/i);
  assert.match(html, /particularly post-training/i);
  assert.match(html, /using reinforcement learning to study LLMs/i);
  assert.match(html, /engineering practice and human–computer interaction/i);
  assert.match(html, /<h2[^>]*>News<\/h2>/i);
  assert.match(html, /Local Reward Refinement for Long-Horizon Trajectories/i);
  assert.match(html, /work focuses on controlled sequential tasks/i);
  assert.match(html, /github\.com\/ShuoZhang021022\/local-reward-refinement-for-long-horizon-trajectories/i);
  assert.match(html, /src="\/state-branch-diagram\.png"/i);
  assert.match(html, /State branching diagram with near-zero advantages/i);
  assert.match(html, /Learning an LLM Agent&#x27;s Harness with GRPO/i);
  assert.match(html, /github\.com\/ShuoZhang021022\/harness-grpo-lab/i);
  const harnessArticle = [...html.matchAll(/<article\b[^>]*>[\s\S]*?<\/article>/g)]
    .map(([article]) => article)
    .find((article) => article.includes("harness-grpo-lab"));
  assert.match(harnessArticle ?? "", /src="\/agent-tool-flow\.png"/i);
  assert.match(harnessArticle ?? "", /Agent creates and selects tools from a tool pool/i);
  assert.match(html, /Passive-Judge Training and Test-Time Actor–Judge Selection for Code Repair/i);
  assert.match(html, /github\.com\/ShuoZhang021022\/actor-judge-code-repair-3\.0/i);
  const actorJudgeArticle = [...html.matchAll(/<article\b[^>]*>[\s\S]*?<\/article>/g)]
    .map(([article]) => article)
    .find((article) => article.includes("actor-judge-code-repair-3.0"));
  assert.match(actorJudgeArticle ?? "", /src="\/actor-judge-flow\.png"/i);
  assert.match(actorJudgeArticle ?? "", /Actor and Judge provide inputs that combine into a final decision/i);
  assert.doesNotMatch(html, /<article class="news-item news-item--text-only">/i);
  assert.match(html, /mailto:shuozhang2002@uchciago\.edu/i);
  assert.match(html, /https:\/\/github\.com\/ShuoZhang021022/i);
  assert.match(html, /src="\/shuo-zhang\.jpg"/i);
  assert.doesNotMatch(html, /Scholar|<h2>Contact<\/h2>/i);
  assert.doesNotMatch(html, /Selected Work|Recent News|Current focus|Open To/);
  assert.doesNotMatch(html, /Researcher · Developer · Lifelong Learner/);
  assert.doesNotMatch(html, /Site navigation|class="topbar"|class="english-name"/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("removes the disposable starter preview", async () => {
  const packageJson = await readFile(new URL("../package.json", import.meta.url), "utf8");
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await assert.rejects(
    access(new URL("../app/_sites-preview/", templateRoot)),
  );
});
