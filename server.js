#!/usr/bin/env node
const next = require("next");

const app = next({});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = require("./server/server-app");

  server.all("*", (req, res) => {
    res.set(
      "CDN-cache-control",
      "public, max-age=30, stale-while-revalidate=300, stale-if-error=300",
    );
    res.set(
      "Cache-Control",
      "public, max-age=30, stale-while-revalidate=300, stale-if-error=300",
    );
    return handle(req, res);
  });

  server.listen(3000, () => {
    console.log("listening to port 3000");
  });
});
