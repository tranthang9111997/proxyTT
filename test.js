var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = process.env.PORT || "8000";
const mongoose = require("mongoose");
var app = express();
const cron=require("node-cron");
var usersRouter = require('./routes/api');
var usersRouter2 = require('./routes/proxies');
var http = require('http');

var db ="mongodb://localhost:27017/sockserver";
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection; 
connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});