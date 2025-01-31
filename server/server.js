/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

const a = ["do the dishes", "take out the kids", "make endomi"];
app.get("/list", (req, res) => {
  res.json({ jobs: a });
});

app.post("/", (req, res) => {
  const { task } = req.body;
  if (!task) {
    console.log("problem no body from front");
  }
  a.push(task);
});

app.listen(5000, () => {
  console.log("server running in port 5000");
});
