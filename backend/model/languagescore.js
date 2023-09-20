const mongoose = require("mongoose");
const User = require("./user");

const languageScoreSchema = mongoose.Schema(
  {
    lang_id: { type: String, ref: "language", required: true },
    user_id: { type: mongoose.Schema.ObjectId, required: true, ref: User },
    score: { type: Number, required: true },
  },
  { timestamps: true }
);

const LanguageScore = mongoose.model("languagescore", languageScoreSchema);

module.exports = LanguageScore;
