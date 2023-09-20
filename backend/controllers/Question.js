const mongoose = require("mongoose");

const db = mongoose.connection;
const getQuestions = async (req, res) => {
  const { lang_id, category } = req.query;
  try {
    const lang = await db
      .collection("questions")
      .find({ lang_id, category })
      .toArray();
    res.status(200).send({ lang });
  } catch (err) {
    console.log(err);
    res.status(500).send({ err });
  }
};

module.exports = { getQuestions };
