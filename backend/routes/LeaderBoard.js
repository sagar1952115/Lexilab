const express = require("express");
const { getLeaderBoard } = require("../controllers/LeaderBoard");
const router = express.Router();

router.route("/:lang/leaderboard").get(getLeaderBoard);

module.exports = router;
