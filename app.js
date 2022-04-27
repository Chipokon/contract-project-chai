const express = require('express');
const logger = require('morgan');
const path = require('path');

const hbs = require('hbs');
const loginRouter = require('./routes/login.route');
const registRouter = require('./routes/regist.route');
const config = require('./config/config');
const logOutRouter = require('./routes/logout.route')


const app = express()

const PORT = process.env.PORT ?? 3000

config(app);


app.use('/login', loginRouter);
app.use('/regist', registRouter);
app.use('/logout', logOutRouter)


//routes require
const mainRouter = require('./routes/main.route');

//routes use
app.use('/', mainRouter);
app.listen(PORT, () => {
  console.log(`***server get started PORT: ${PORT}`);
})
