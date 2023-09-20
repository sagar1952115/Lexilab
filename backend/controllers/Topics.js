const mongoose = require("mongoose");

const db = mongoose.connection;
const getTopics = async (req, res) => {
  const { lang_id, level } = req.query;
  try {
    const topics = await db
      .collection("topics")
      .find({ lang_id, level })
      .toArray();
    res.status(200).send({ topics });
  } catch (err) {
    console.log(err);
    res.status(500).send({ err });
  }
};

module.exports = { getTopics };
