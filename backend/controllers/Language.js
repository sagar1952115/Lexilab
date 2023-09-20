const mongoose = require("mongoose");

const db = mongoose.connection;
const getLanguages = async (req, res) => {
  try {
    const lang = await db.collection("language").find().toArray();
    res.status(200).send({ lang });
  } catch (err) {
    console.log(err);
    res.status(500).send({ err });
  }
};

module.exports = { getLanguages };
