const express = require('express');
const app = express();
app.use(express.json());
const ejs = require('ejs');
const cookieParser = require('cookie-parser');
const cors = require('cors');
app.use(cors());
const router = require('./route/router');
const multer = require('multer');
// use & set
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(router);
app.listen(9000, console.log(9000));
