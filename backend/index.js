const express = require("express");
const mongoose = require("mongoose");
const UserRoute = require("./routes/User");
const LangRoute = require("./routes/Language");
const QuestionRoute = require("./routes/Question");
const TopicRoute = require("./routes/Topics");
const ResultRoute = require("./routes/Result");
const bodyParser = require("body-parser");
const cors = require("cors");
const LeaderBoardRoute = require("./routes/LeaderBoard");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
dotenv.config();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);
mongoose
  .connect(process.env.MONGO_URL)
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("backend is up and running");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", UserRoute);
app.use("/api/", LangRoute);
app.use("/api/", TopicRoute);
app.use("/api/", QuestionRoute);
app.use("/api/test", ResultRoute);
app.use("/api/", LeaderBoardRoute);
