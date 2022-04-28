require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const path = require('path');



//routes require
const mainRouter = require('./routes/main.route');
const hbs = require('hbs');
const loginRouter = require('./routes/login.route');
const registRouter = require('./routes/regist.route');
const config = require('./config/config');

const logOutRouter = require('./routes/logout.route');
const adminCabRouter = require('./routes/adminCab.route');
const userCabRouter = require('./routes/userCab.route');
// const commentRouter = require('./routes/comment.route')
// const sessionMiddleWare = require('./middleware/session')
const teaPageRouter = require('./routes/teaPage.route')


const app = express();

const PORT = process.env.PORT ?? 3000;

config(app);

// routes use
app.use('/admin', adminCabRouter);
app.use('/user', userCabRouter);
app.use('/', mainRouter);
app.use('/login', loginRouter);
app.use('/regist', registRouter);
app.use('/logout', logOutRouter)
// app.use('/comment', commentRouter)
// app.use('/comment',sessionMiddleWare)
app.use('/teaPage', teaPageRouter)


app.listen(PORT, () => {
  console.log(`***server get started PORT: ${PORT}`);
});
