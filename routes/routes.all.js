const express = require("express");
const templateRoute = require("./template.route");
const composeRoute = require("./compose.route");
const routes = express.Router();

const allRoutes = [
  { path: "/template", route: templateRoute },
  { path: "/compose", route: composeRoute },
];

allRoutes.forEach((ru) => routes.use(ru.path, ru.route));

module.exports = routes;
