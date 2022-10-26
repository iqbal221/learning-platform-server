const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const CourseCategory = require("./data/CourseCategory.json");
const CourseCard = require("./data/CourseCard.json");

app.get("/coursesCategory", (req, res) => {
  res.send(CourseCategory);
});

app.get("/courses", (req, res) => {
  res.send(CourseCard);
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
