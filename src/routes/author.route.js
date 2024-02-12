// const router = require("express").Router();
const express = require("express");
const authorRouter = express.Router();

authorRouter.get("/", (req, res) => {
  res.json([{ name: "JK Rowling", age: 55 }]);
});

module.exports = authorRouter;