var passport = require('passport');
const user = require('../models/user');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
// var GitHubStratergy = require('passport-github2').Strategy;

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:4000/auth/google/callback'
    },
    function (accessToken, refreshToken, profile, cb) {
      user
        .create({
          id: profile.id,
          displayName: profile.displayName,
          emails: profile.emails[0].value,
          photos: profile.photos[0].value,
          provider: profile.provider,
          isVerified: profile.emails[0].verified
        })
        .then(() => {
          cb(null, profile);
        })
        .catch(err => {
          console.log(err);
        });
    }
  )
);

// passport.use(
//   new GitHubStratergy(
//     {
//       clientID: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//       callbackURL: 'http://localhost:4000/auth/github/callback'
//     },
//     async function (accessToken, refreshToken, profile, done) {
//       console.log(accessToken, refreshToken, profile);
//     }
//   )
// );
