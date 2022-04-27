const express = require('express');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const hbs = require('hbs')
const config = require('./config/config');

const app = express()

const PORT = process.env.PORT ?? 3000

config(app);

//routes require
const mainRouter = require('./routes/main.route');

//routes use
app.use('/', mainRouter);
app.listen(PORT, () => {
  console.log(`***server get started PORT: ${PORT}`);
})
