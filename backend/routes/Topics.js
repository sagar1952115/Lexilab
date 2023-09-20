const express = require("express");
const { getTopics } = require("../controllers/Topics");
const router = express.Router();

router.route("/topics").get(getTopics);

module.exports = router;
