require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const sessionConfig = require('./sessionConfig');

module.exports = function config(app) {
  app.set('view engine', 'hbs');
  app.set('views', path.join(process.env.PWD, 'views'));
  hbs.registerPartials(path.join(process.env.PWD, 'views', 'partials'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json())
  app.use(express.static('public'))
  // подключаем миддлварку сессий
  app.use(session(sessionConfig));
  app.use(cookieParser());
  app.use(morgan('dev'));
};

