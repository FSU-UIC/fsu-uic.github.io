import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
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

test("server-renders the Ubiquitous & Intelligence Computing Group homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Ubiquitous &amp; Intelligence Computing Group \| FSU<\/title>/i);
  assert.match(html, /Florida State University/);
  assert.match(html, /Department of Computer Science/);
  assert.match(html, /Ubiquitous &amp; Intelligence Computing Group/);
  assert.match(html, /Research continuum from hardware to human impact/);
  assert.match(html, /Built together/);
  assert.match(html, /Applications/);
  assert.match(html, /Hardware/);
  assert.match(html, /Systems &amp; Networks/);
  assert.match(html, /Intelligence/);
  assert.match(html, /Humans/);
  assert.match(html, /Sense &amp; act/);
  assert.match(html, /Learn &amp; reason/);
  assert.match(html, /Cross-layer collaboration/);
  assert.match(html, /Ideas that become possible together/);
  assert.match(html, /Edge intelligence for health/);
  assert.match(html, /Privacy-aware sensing/);
  assert.match(html, /For students/);
  assert.match(html, /For sponsors &amp; partners/);
  assert.doesNotMatch(html, /research-house\.png|Research house annotations|og\.png/);
  assert.doesNotMatch(
    html,
    /First-semester roadmap|Student Research Mixer|bring Gary into the founding conversation|Your site is taking shape|codex-preview/i,
  );
});
