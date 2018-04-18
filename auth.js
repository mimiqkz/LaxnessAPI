require('dotenv').config();
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const { Strategy } = require('passport-local');
const users = require('./dataAccess');
const login = require('./routes/login');

const app = express();
app.use(express.json());

const sessionSecret = process.env.SESSION_SECRET || 'fj489jfadkljv';

app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false,
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await users.findById(id);
    return done(null, user);
  } catch (error) {
    return done(error);
  }
});

async function strat(username, password, done) {
  const user = await users.findByUsername(username);
  if (!user) {
    return done(null, false);
  }

  let result = false;
  try {
    result = await users.comparePasswords(password, user.password);
  } catch (error) {
    done(error);
  }

  if (result) {
    return done(null, user);
  }
  return done(null, false);
}

passport.use(new Strategy(strat));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', login);


module.exports = app;
