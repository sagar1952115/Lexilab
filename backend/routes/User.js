const {
  register,
  login,
  getLearningInfo,
  resetUserProgress,
} = require("../controllers/User");
const express = require("express");
const router = express.Router();

router.route("/signup").post(register);
router.route("/signin").post(login);
router.route("/profile/:id").get(getLearningInfo);
router.route("/profile/:id/reset").post(resetUserProgress);

module.exports = router;
