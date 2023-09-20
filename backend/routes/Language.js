const express = require("express");
const { getLanguages } = require("../controllers/Language");
const router = express.Router();

router.route("/lang").get(getLanguages);

module.exports = router;
