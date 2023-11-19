const express = require("express");
const composeController = require("../controller/compose.controller");
const route = express.Router();

route.get("/", composeController.compose);

module.exports = route;
