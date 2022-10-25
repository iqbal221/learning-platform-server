const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const CourseCategory = require("./data/CourseCategory.json");

app.get("/course", (req, res) => {
  res.send(CourseCategory);
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
