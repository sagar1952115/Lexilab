const Result = require("../model/result");
const LanguageScore = require("../model/languagescore");

const getResult = async (req, res) => {
  const { questionArr, answerArr, user_id } = req.body;
  let correct = 0;
  let incorrect = 0;
  let unattempted = 0;
  let point = questionArr[0].point;
  let lang_id = questionArr[0].lang_id;
  let category = questionArr[0].category;
  for (let i = 0; i < questionArr.length; i++) {
    if (questionArr[i].correct_answer === answerArr[i]) {
      correct++;
    } else if (answerArr[i] === "") {
      unattempted++;
    } else {
      incorrect++;
    }
  }

  let score = point * correct;
  let max_score = point * questionArr.length;
  let status;

  let percentage = (score / max_score) * 100;
  percentage >= 60 ? (status = "complete") : (status = "incomplete");

  try {
    const testAlreadyGiven = await Result.findOne({ user_id, category });
    const languageScoreByUser = await LanguageScore.findOne({
      user_id,
      lang_id,
    });
    if (!testAlreadyGiven) {
      try {
        const saveTest = await Result.create({
          user_id,
          category,
          lang_id,
          score,
          status,
          max_score,
        });
        if (!languageScoreByUser) {
          try {
            const saveLanguageScore = await LanguageScore.create({
              lang_id,
              user_id,
              score,
            });
          } catch (err) {
            console.log(err);
          }
        } else {
          try {
            const newScore = score + languageScoreByUser.score;
            const saveUpdatedLanguageScore =
              await LanguageScore.findOneAndUpdate(
                { user_id, lang_id },
                { score: newScore }
              );
          } catch (err) {
            console.log(err);
          }
        }
      } catch (arr) {
        console.log(arr);
      }
    } else {
      let newScore = Math.max(testAlreadyGiven.score, score);
      let newStatus = "incomplete";
      if (status === "complete" || testAlreadyGiven.status === "complete") {
        newStatus = "complete";
      }

      try {
        const updatedData = await Result.findOneAndUpdate(
          { user_id, category },
          { score: newScore, status: newStatus }
        );
      } catch (err) {
        console.log(err);
      }

      try {
        const newLanguageScore =
          languageScoreByUser.score - testAlreadyGiven.score + newScore;
        const saveUpdatedLanguageScore = await LanguageScore.findOneAndUpdate(
          { user_id, lang_id },
          { score: newLanguageScore }
        );
      } catch (err) {
        console.log(err);
      }
    }
    res.status(200).send({
      correct,
      incorrect,
      unattempted,
      score,
      max_score,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ err });
  }
};

module.exports = { getResult };
