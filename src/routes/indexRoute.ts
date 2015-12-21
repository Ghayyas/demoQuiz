/// <reference path="../../typings/tsd.d.ts" />

import * as userController from '../controllers/userController';
import  * as express from 'express';

let router : express.Router = express.Router();

router.get('/' , (req: express.Request, res: express.Response) =>{
	res.render('index',{title: 'Quiz Router Location'});
});
router.get('/signup',(req:express.Request, res: express.Response)=>{
	res.render('signup',{title: 'Sign Up', message: req.flash('signupMessage')});
});
router.get('/signin',(req: express.Request, res: express.Response)=>{
	res.render('signin',{title: "Sign In", message:req.flash('signinMessage')});
});
router.get("/quiz",(req,res)=>{
	res.render('quiz')
});
router.get("../public/style.css",(req,res)=>{
	res.render('style');
});
router.post('/signup', userController.creatUser);
router.post('/signin', userController.retriveUser);

module.exports = router;