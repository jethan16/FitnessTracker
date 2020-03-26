const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// var path = require("path");
// const db = require("./models");

const PORT = process.env.PORT || 3000;

// const Workout = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout",
  { useNewUrlParser: true }
);

(require('./controllers/api-routes'))(app);
(require('./controllers/html-routes'))(app);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
