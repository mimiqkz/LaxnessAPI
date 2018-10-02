require('dotenv').config();

const express = require('express');
const path = require('path');
const api = require('./routes/api');
const auth = require('./auth');
const view = require('./routes/view');
const schedule = require('node-schedule');
const { getDate } = require('./utils');
const { getDailyImage, saveImageToDisk } = require('./imageShare');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.json());

app.use((req, res, next) => {
  if (req.isAuthenticated()) {
    res.locals.user = req.user.name;
  }

  res.locals.showLogin = true;

  next();
});

app.locals.isInvalid = (param, errors) => {
  if (!errors) {
    return false;
  }

  return Boolean(errors.find(i => i.param === param));
};

app.locals.getDate = getDate;

app.use(auth);
app.use('/api', api);
app.use(view);

schedule.scheduleJob('0 0 * * *', () => {
  // do something
});


const createImage = async () => {
  getDailyImage().then(i => saveImageToDisk(i))
};

createImage().catch(err => console.error('Error creating image', err));


const notFoundHandler = (req, res, next) => {
  // eslint-disable-line
  res.render('error', { err: { msg: 'Síða fannst ekki' } });
};

const errorHandler = (err, req, res, next) => {
  // eslint-disable-line
  console.error(err);

  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ error: 'Invalid json' });
  }

  return res('error', { err: { msg: 'Eitthvað fór úrskeiðis!' } });
};

app.use(notFoundHandler);
app.use(errorHandler);

const { PORT: port = 3000, HOST: host = '127.0.0.1' } = process.env;
try {
  app.listen(port, () => {
    console.info(`Server running at http://${host}:${port}/`);
  });
} catch (err) {
  console.error(err);
}
