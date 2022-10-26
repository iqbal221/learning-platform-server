const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const CourseCategory = require("./data/CourseCategory.json");
const CourseCard = require("./data/CourseCard.json");
const CourseDetails = require("./data/CourseDetails.json");

app.get("/coursesCategory", (req, res) => {
  res.send(CourseCategory);
});

app.get("/coursesCard", (req, res) => {
  res.send(CourseCard);
});

app.get("/coursesCategory/:id", (req, res) => {
  const id = req.params.id;
  const singleCourseDetails = CourseDetails.find((cd) => cd.id == id);
  res.send(singleCourseDetails);
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
