const express = require("express");
const cors = require("cors");
const noRouteFound = require("./middleware/noRouteFound");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const routes = require("./routes/routes.all");
const bodyParser = require("body-parser");
const path = require("path");
const postcssMiddleware = require("postcss-middleware");
const tailwindcss = require("tailwindcss");

//making app :
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Dynamically generate and serve Tailwind CSS styles
app.use(
  "/public/styles.css",
  postcssMiddleware({
    plugins: [tailwindcss(path.resolve(__dirname, "tailwind.config.js"))],
    src: (req) => path.resolve(__dirname, "styles.css"),
  })
);

// test server
app.get("/", (req, res) => {
  // get the location according to the filesName inside folder
  const folder = "templates/body";
  const Urls = [];
  const fs = require("fs");
  const path = require("path");
  const files = fs.readdirSync(folder);

  files.forEach((file) => {
    Urls?.push(`/template?type=${file}`);
  });

  Urls?.push("/compose?type=compose");

  const modifiedUrlsHtml = Urls?.map((url) => {
    return `
    <a href="${url}" class="transition-transform transform hover:scale-105">
      <div class="max-w-xs bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg overflow-hidden shadow-lg m-4">
        <div class="p-6">
          <h5 class="text-2xl mb-0">${url?.split("=")[1]?.split(".")[0]}</h5>
        </div>
      </div>
    </a>
  `;
  });

  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/public/styles.css">
    <title>Nodejs Email template Tester</title>
    <link rel="shortcut icon" href="/public/icons/favicon.png" type="image/x-icon">
    <link rel="icon" href="/public/icons/favicon.png" type="image/x-icon">
  </head>
  <body class="font-sans bg-gradient-to-r from-blue-900 to-indigo-800 text-white min-h-screen flex items-center justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      ${modifiedUrlsHtml?.join("")}
    </div>
  </body>
  </html>
`;

  res.send(html);
});

// route
app.use("/", routes);

// error handler middleware
app.use(globalErrorHandler);
app.use(noRouteFound);

module.exports = app;
