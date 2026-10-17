// docs/swagger.routes.js
// Serves Swagger UI (loaded from a CDN, so it also works on Vercel) and the OpenAPI spec.
const express = require("express");
const spec = require("./swagger.json");

const router = express.Router();

const SWAGGER_UI_VERSION = "5.17.14";
const CDN = `https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/${SWAGGER_UI_VERSION}`;

router.get("/swagger.json", (req, res) => res.json(spec));

router.get("/", (req, res) => {
  res.type("html").send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Quiz System API Docs</title>
  <link rel="stylesheet" href="${CDN}/swagger-ui.min.css" />
</head>
<body>
  <div id="swagger-ui"></div>
  <script src="${CDN}/swagger-ui-bundle.min.js"></script>
  <script>
    window.onload = () => {
      SwaggerUIBundle({
        url: "./swagger.json",
        dom_id: "#swagger-ui",
        persistAuthorization: true
      });
    };
  </script>
</body>
</html>`);
});

module.exports = router;
