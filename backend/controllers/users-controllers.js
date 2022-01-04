const { v4: uuid } = require('uuid');
const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');

const DUMMY_USERS = [
  {
    id: 'u1',
    fName: 'An',
    lName: 'Cao',
    email: 'andrew.cow@outlook.com',
    password: 'Dogwater123',
    fitbitKey: 'jnfi8u4-cduscu84-c3n4943'
  }
];

const signUp = async (req, res, next) => {
  const errors = validationRequest(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid data was passed.")
  }

  const { fName, lName, email, password } = req.body;

  const createdUser = {
    id: uuid(),
    fName,
    lName,
    email,
    password
  }

  DUMMY_USERS.push(createdUser)

  res.status(201).json({user: createdUser});
};


const login = async (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = DUMMY_USERS.find(u => {u.email === email});

  if (!identifiedUser || identifiedUser.password !== password){
    throw new HttpError('Login failed. User could not be found.', 401);
  }

  res.status(201).json({user: createdUser})
};

const updateUser = async (req, res, next) => {
};




exports.signUp = signUp;
exports.login = login;
exports.updateUser = updateUser;
