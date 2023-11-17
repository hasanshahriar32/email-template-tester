const express = require("express");
const cors = require("cors");
const noRouteFound = require("./middleware/noRouteFound");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const routes = require("./routes/routes.all");

//making app :
const app = express();
app.use(express.json());
app.use(cors());

//test server
app.get("/", (req, res) => {
  // get the location according to the filesName inside folder
  const folder = "templates/body";
  const Urls = [];
  const fs = require("fs");
  const path = require("path");
  const files = fs.readdirSync(folder);
  files.forEach((file) => {
    Urls.push(`http://localhost:5000/template?type=${file}`);
  });
  const modifiedUrlsHtml = Urls.map((url) => {
    return `<a href="${url}">${url.split("=")[1].split(".")[0]}</a>`;
  });
  const html = modifiedUrlsHtml.join("<br/>");
  res.send(html);
  // res.send("server is running");
});

//route
app.use("/", routes);

// error handler middleware
app.use(globalErrorHandler);
app.use(noRouteFound);

module.exports = app;
