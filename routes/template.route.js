const express = require("express");
// const templateController = require("../controller/user.controller");
const route = express.Router();

// get the last path segment
// Get the current URL from the browser's address bar
var parse = require("url-parse");
parse("hostname", {});

// Parse the URL
// const url = new URL(parse);
console.log(parse.location());

if (parse?.pathname === "localhost:5000") {
  // Get the pathname without the query parameters
  const url = new URL(parse);
  const pathnameWithoutQuery = url.pathname;

  // Remove leading and trailing slashes from the pathname
  const trimmedPathname = pathnameWithoutQuery.replace(/^\/|\/$/g, "");

  // Split the pathname into an array of segments
  const pathSegments = trimmedPathname.split("/");

  // Get the last path segment
  const lastPathSegment = pathSegments[pathSegments.length - 1] || "";

  console.log(lastPathSegment);

  route.get(`/${lastPathSegment}`, templateController?.lastPathSegment);
}

module.exports = route;
