const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const generateToken = require('../utils/jwt');

const router = express.Router();

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/', session: false }),
  function (req, res) {
    const profile = {
      id: req.user?.id,
      displayName: req.user?.displayName,
      photosUrl: req.user?.photos[0].value,
      provider: req.user?.provider,
      emails: req.user?.emails[0].value,
      isVerified: req.user?.emails[0].verified
    };
    var token = generateToken({ payload: profile });
    res.cookie('token', token, {
      httpOnly: false,
      secure: process.env.NODE_ENV
    });
    res.redirect('http://localhost:3000');
  }
);

module.exports = router;
