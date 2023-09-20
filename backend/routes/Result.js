const express = require("express");
const { getResult } = require("../controllers/Result");
const router = express.Router();

router.route("/result").post(getResult);

module.exports = router;
