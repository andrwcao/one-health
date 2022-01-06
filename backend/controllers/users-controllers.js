const { v4: uuid } = require('uuid');
const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');
const User = require('../models/user');

const signUp = async (req, res, next) => {
  const errors = validationRequest(req);
  if (!errors.isEmpty()) {
    const error = new HttpError(
      "Invalid data was passed.", 
      422
    );
    return next(error);
  }

  const { fName, lName, email, password, gender } = req.body;

  let identifiedUser;
  
  try {
    identifiedUser = await User.findOne({email: email});
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

  const createdUser = new User({
    fName,
    lName,
    email,
    password,
    gender
  });

  try {
    await createdUser.save();
  } catch(err) {
    const error = new HttpError(
      'Sign up failed, please try again later.',
      500
    );
    return next(error);
  }

  res.status(201).json({user: createdUser.toObject({getters: true})});
};


const login = async (req, res, next) => {
  const { email, password } = req.body;

  let identifiedUser;
  
  try {
    identifiedUser = await User.findOne({email: email});
  } catch(err) {
    const error = new HttpError(
      'Sign up failed, please try again later.',
      500
    );
    return next(error);
  }

  if (!identifiedUser || identifiedUser.password !== password){
    const error = new HttpError(
      'Login failed. User could not be found.', 
      401
    );
    return next(error);
  }

  res.status(201).json({user: identifiedUser.toObject({getters: true})});
};

const updateUser = async (req, res, next) => {
};




exports.signUp = signUp;
exports.login = login;
exports.updateUser = updateUser;
