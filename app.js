require('dotenv').config();
const express = require('express');
const api = require('./api');

const app = express();

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

