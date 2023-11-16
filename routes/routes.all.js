const express = require("express");
const templateRoute = require("./template.route");
const routes = express.Router();

const allRoutes = [{ path: "/template", route: templateRoute }];

allRoutes.forEach((ru) => routes.use(ru.path, ru.route));

module.exports = routes;
