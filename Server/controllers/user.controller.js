const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const { sendEmail } = require("../utils/utility");

const loginUserWithEmail = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Phone number does not registered" }] });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "invalid credentials" }] });
    }

    const payload = {
      user: {
        id: user._id,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 7200 }, (err, token) => {
      if (err) throw err;
      res.json({ token, user });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: error });
  }
};

const registerUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullName, email, gender, password } = req.body;

  try {
    const user = new User({
      fullName,
      email,
      gender,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    await sendEmail(email);

    const payload = {
      user: {
        id: user._id,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 7200 }, (err, token) => {
      if (err) throw err;

      res.json({ token, user });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: error.message });
  }
};

const updateUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullName } = req.body;
  try {
    let user = await User.findById(req.params.id);

    if (!user) {
      res.status(400).json({ message: "User not found" });
    }

    user.fullName = fullName;

    await user.save();

    res.json({ msg: "success", data: user });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

module.exports = {
  registerUser,
  updateUser,
  loginUserWithEmail,
};
