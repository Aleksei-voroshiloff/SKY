const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const app = express();
const authRouter = require('./routes/authRouter');
const tokenRouter = require('./routes/tokenRouter');
const trassaRouter = require('./routes/trassaRouter');

app.use(morgan('dev'));

app.use(express.static('public'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/tokens', tokenRouter);
app.use('/api/trassa', trassaRouter);

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

module.exports = app;
