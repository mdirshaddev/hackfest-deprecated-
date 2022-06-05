require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const googleOAuth = require('./routers/passport.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(passport.initialize());
require('./utils/passport');

/**
 * Just for testing things out
 */
app.get('/', async (req, res) => {
  res.status(200).json({ status: 'Working fine.' });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  console.log(req.headers);
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    console.log(user);

    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
}
app.get('/test', authenticateToken, (req, res) => {
  res.status(200).json({ token: 'accepted' });
});

app.use('/', googleOAuth);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
  mongoose.connect(process.env.MONGODB_URI, err => {
    if (!err) {
      console.log('Database Connected Successfully.');
    }
  });
});
