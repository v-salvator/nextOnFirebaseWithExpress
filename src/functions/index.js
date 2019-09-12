const functions = require("firebase-functions");
const next = require("next");
const express = require("express");

var dev = process.env.NODE_ENV !== "production";
var app = next({ dev, conf: { distDir: "next" } });
var handle = app.getRequestHandler();
const server = express();

app.prepare().then(() => {
  server.get("/test", (req, res) => {
    return res.json({
      hehe: "ggggggg"
    });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });
});

exports.next = functions.https.onRequest(server);
