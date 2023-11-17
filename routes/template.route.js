const express = require("express");
const templateController = require("../controller/template.controller");
const route = express.Router();

route.get("/", templateController.template);

module.exports = route;
