const express = require("express");
const templateController = require("../controller/template.controller");
const route = express.Router();

route.get("/", templateController.template);
route.post("/send", templateController.sendMail);

module.exports = route;
