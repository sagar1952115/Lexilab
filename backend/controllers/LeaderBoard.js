const LanguageScore = require("../model/languagescore");

const getLeaderBoard = async (req, res) => {
  const lang_id = req.params.lang;
  try {
    const leaderboardData = await LanguageScore.find({ lang_id })
      .populate("user_id")
      .sort({ score: -1 });

    res.status(200).send({ leaderboardData });
  } catch (err) {
    console.log(err);
    res.status(500).send({ err });
  }
};

module.exports = { getLeaderBoard };
