/// <reference path="../typings/tsd.d.ts" />

import * as express from "express";
import * as morgan from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from  "body-parser";
import * as path from 'path';
import * as mongoose from 'mongoose';
import session = require('express-session');

import flash = require('connect-flash');

//custom module import

let index : express.Router = require('./routes/indexRoute');

//server configuration

let app: express.Express = express();
let port : number = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost/quizapp');

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//builtin middleware

app.use(express.static(path.join(__dirname,'../public')));

//third party middleware

app.use(morgan('dev'));
app.use(cookieParser('thisIsMySecret'));
app.use(bodyParser.json());
app.use(session());
app.use(bodyParser.urlencoded({extended: false}));
app.use(flash());

//custom mounted middleware for routing

app.use('/',index);
/*
app.use('/quiz',(req,res)=>{
	let quiz = path.join(__dirname, 'views/quiz.jade')
	res.sendfile(quiz);
});
*/
app.listen(port,()=>{
	console.log('Express is working on port' +port);
});


