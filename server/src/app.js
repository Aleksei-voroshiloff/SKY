const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const app = express();
const authRouter = require('./routes/authRouter'); 
const tokenRouter = require('./routes/tokenRouter');

app.use(morgan('dev'));

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/auth', authRouter); 
app.use('/api/tokens', tokenRouter);

module.exports = app;