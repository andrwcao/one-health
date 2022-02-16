const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const HttpError = require('../models/http-error');
const User = require('../models/user');

const signUp = async (req, res, next) => {
  // Performs validation on request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError(
      "Invalid data was passed.", 
      422
    );
    return next(error);
  }
  
  const { fName, lName, email, password, gender } = req.body;

  // Determines if user with provided email already exists
  let identifiedUser;
  try {
    identifiedUser = await User.findOne({ email: email });
  } catch(err) {
    const error = new HttpError(
      'Sign up failed, please try again later.',
      500
    );
    return next(error);
  }

  if (identifiedUser) {
    const error = new HttpError(
      'Sign up failed, user already exists.',
      422
    );
    return next(error);
  }

  // Hashes password
  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError(
      'Sign up failed, please try again later.',
      500
    );
    return next(error);
  }

  // Creates user
  const createdUser = new User({
    fName,
    lName,
    email,
    password: hashedPassword,
    gender
  });

  // Saves user to database
  try {
    await createdUser.save();
  } catch(err) {
    const error = new HttpError(
      'Sign up failed, please try again later.',
      500
    );
    return next(error);
  }

  // Creates JWT to be sent back
  let token;
  try {
    token = jwt.sign({userId: createdUser.id}, process.env.SECRET_KEY, {expiresIn: '24h'});
  } catch(err) {
    const error = new HttpError(
      'Sign up failed, please try again later.',
      500
    );
    return next(error);
  }

  res.status(201).json({userId: createdUser.id, token: token});
};


const login = async (req, res, next) => {
  const { email, password } = req.body;

  let identifiedUser;
  
  try {
    identifiedUser = await User.findOne({email: email});
  } catch(err) {
    const error = new HttpError(
      'Login failed, please try again later.',
      500
    );
    return next(error);
  }

  if (!identifiedUser){
    const error = new HttpError(
      'Login failed. User credentials are not correct', 
      401
    );
    return next(error);
  }

  let isValid;
  try {
    isValid = await bcrypt.compare(password, identifiedUser.password);
  } catch(err) {
    const error = new HttpError(
      'Login failed, please try again later.',
      500
    );
    return next(error);
  }

  if (!isValid){
    const error = new HttpError(
      'Login failed. User credentials are not correct', 
      401
    );
    return next(error);
  }

  // Creates JWT to be sent back
  let token;
  try {
    token = jwt.sign({userId: identifiedUser.id}, process.env.SECRET_KEY, {expiresIn: '24h'});
  } catch(err) {
    const error = new HttpError(
      'Sign up failed, please try again later.',
      500
    );
    return next(error);
  }

  res.status(201).json({userId: identifiedUser.id, token: token});
};

const updateUser = async (req, res, next) => {
};

const fitbit = (req, res, next) => {
  
};

const fitbitCallback = (req, res, next) => {
  
};

exports.signUp = signUp;
exports.login = login;
exports.updateUser = updateUser;
exports.fitbit = fitbit;
exports.fitbitCallback = fitbitCallback;
