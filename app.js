const express = require ('express');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const hbs = require('hbs')

const app = express()

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`***server get started PORT: ${PORT}`);
})
