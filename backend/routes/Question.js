const express = require("express");
const { getQuestions } = require("../controllers/Question");
const router = express.Router();

router.route("/question").get(getQuestions);

module.exports = router;
