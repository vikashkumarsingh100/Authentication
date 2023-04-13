var express = require("express");
var app = express();
var a = require("./index");
var user = require("./src/db/mongoose");
app.use(express.json());

var router = require("./Router/task");
app.use(router);
app.listen(3000, (error) => {
  if (error) return error;
  console.log("app is up and running");
});
