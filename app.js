require('dotenv').config();
const express = require('express');
const path = require('path');
const api = require('./api');
const session = require('express-session');
const passport = require('passport');
const { Strategy } = require('passport-local');
const users = require('./db.js');

const app = express();
const sessionSecret = process.env.SESSION_SECRET || 'fj489jfadkljv';

app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false,
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

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
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  if (req.isAuthenticated()) {
    res.locals.user = req.user.name;
  }

  res.locals.showLogin = true;

  next();
});

// hjálparfall fyrir view
app.locals.isInvalid = (param, errors) => {
  if (!errors) {
    return false;
  }

  return Boolean(errors.find(i => i.param === param));
};

app.get('/login', (req, res) => {
  let message = '';

  if (req.session.messages && req.session.messages.length > 0) {
    message = req.session.messages.join(', ');
  }

  res.render('login', { showLogin: false, message, title: 'Innskráning' });
});

app.post(
  '/login',
  passport.authenticate('local', {
    failureMessage: 'Vitlaust notendanafn eða lykilorð',
    failureRedirect: '/login',
  }),
  (req, res) => {
    res.redirect('/admin');
  },
);

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.use(express.json());
app.use('/', api);

function notFoundHandler(req, res, next) { // eslint-disable-line
  res.status(404).json({ error: 'Not found' });
}

function errorHandler(err, req, res, next) { // eslint-disable-line
  console.error(err);

  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ error: 'Invalid json' });
  }

  return res.status(500).json({ error: 'Internal server error' });
}

app.use(notFoundHandler);
app.use(errorHandler);

const {
  PORT: port = 3000,
  HOST: host = '127.0.0.1',
} = process.env;
try {
  app.listen(port, () => {
    console.info(`Server running at http://${host}:${port}/`);
  });
} catch (err) {
  console.error('here');
  console.error(err);
}

