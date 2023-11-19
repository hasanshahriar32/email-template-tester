const express = require("express");
const composeController = require("../controller/compose.controller");
const route = express.Router();

route.get("/", composeController.compose);
route.get("/ai", composeController.ai);
route.get("/manual", composeController.ai);

module.exports = route;
