const User = require("../model/user");

const bcrypt = require("bcrypt");
const LanguageScore = require("../model/languagescore");
const Result = require("../model/result");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).send("Please enter all the fields");
  }
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400).send("User already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt); // Hashing the password with the salt

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  console.log(req.body);

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400).send("Failed to create the user");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send("Please enter all the fields");
  }
  const userExist = await User.findOne({ email });

  if (!userExist) {
    res.status(400).send("User does not exist");
  }
  const isMatched = await bcrypt.compare(password, userExist.password);
  if (isMatched) {
    res.status(200).json({
      _id: userExist._id,
      name: userExist.name,
      email: userExist.email,
    });
  } else {
    res.status(400).send("Enter correct Password");
  }
};

const getLearningInfo = async (req, res) => {
  try {
    const learningInfo = await LanguageScore.find({
      user_id: req.params.id,
    });
    res.status(200).send({ learningInfo });
  } catch (err) {
    console.log(err);
  }
};

const resetUserProgress = async (req, res) => {
  id = req.params.id;
  try {
    const deletedData = await Result.deleteMany({ user_id: id });
  } catch (err) {
    console.log(err);
  }
  try {
    const deletedLanguageScore = await LanguageScore.deleteMany({
      user_id: id,
    });
  } catch (err) {
    console.log(err);
  }
  res.status(200).send("User Progress Reset");
};

module.exports = { register, login, getLearningInfo, resetUserProgress };
