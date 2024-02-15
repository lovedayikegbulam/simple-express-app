// const router = require("express").Router();
const express = require("express");
const authorRouter = express.Router();

authorRouter.get("/", (req, res) => {
  res.json([{"Method": "get"},{ name: "JK Rowling", age: 55 }]);
});

authorRouter.post("/", (req, res) => {
  res.json([{"Method": "post"},{ name: "JK Rowling", age: 55 }]);
});

authorRouter.patch("/", (req, res) => {
  res.json([{"Method": "patch"},{ name: "JK Rowling", age: 55 }]);
});

authorRouter.put("/", (req, res) => {
  res.json([{"Method": "put"},{ name: "JK Rowling", age: 55 }]);
});

authorRouter.delete("/", (req, res) => {
  res.json([{"Method": "delete"},{ name: "JK Rowling", age: 55 }]);
});

module.exports = authorRouter;