/// <reference path="../../typings/tsd.d.ts" />
var userController = require('../controllers/userController');
var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    res.render('index', { title: 'Quiz Router Location' });
});
router.get('/signup', function (req, res) {
    res.render('signup', { title: 'Sign Up', message: req.flash('signupMessage') });
});
router.get('/signin', function (req, res) {
    res.render('signin', { title: "Sign In", message: req.flash('signinMessage') });
});
router.get("/quiz", function (req, res) {
    res.render('quiz');
});
router.get("../public/style.css", function (req, res) {
    res.render('style');
});
router.post('/signup', userController.creatUser);
router.post('/signin', userController.retriveUser);
module.exports = router;
