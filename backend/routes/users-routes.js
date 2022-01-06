const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/users-controllers');
const HttpError = require('../models/http-error');

const router = express.Router();

/*
        check('fName')
            .not()
            .isEmpty(),
        check('lName')
            .not()
            .isEmpty(),
        check('email')
            .normalizeEmail()
            .isEmail(),
        check('password').isLength({min: 8}),
*/

// When users request to sign up
router.post(
    '/signup', 
    [

    ],
    usersController.signUp
);

router.post('/login', usersController.login);

router.patch('/', usersController.updateUser);

module.exports = router;