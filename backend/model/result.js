const mongoose = require("mongoose");
const User = require("./user");

const resultSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.ObjectId, required: true, ref: User },
    category: { type: String, required: true },
    lang_id: { type: String, required: true },
    status: { type: String, required: false, default: "incomplete" },
    score: { type: Number, required: true },
    max_score: { type: Number, required: true },
  },
  { timestamps: true }
);

const Result = mongoose.model("result", resultSchema);

module.exports = Result;
