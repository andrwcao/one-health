const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/users-controllers');
const checkAuth = require('../middleware/check-auth');
const HttpError = require('../models/http-error');

const router = express.Router();

// When users request to sign up
router.post(
    '/signup', 
    [
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
    ],
    usersController.signUp
);

router.post('/login', usersController.login);

router.get('/', (req, res) => {
    res.send('<a href="/api/users/auth/fitbit">Authenticate with FITBIT</a>');
});

router.get('/auth/fitbit', usersController.fitbit);

router.get( '/auth/fitbit/callback', usersController.fitbitCallback);

// Routes below this are inaccessible unless authenticated
router.use(checkAuth);



router.patch('/', usersController.updateUser);

module.exports = router;