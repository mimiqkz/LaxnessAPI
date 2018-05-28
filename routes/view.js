const express = require('express');
const { validationResult } = require('express-validator/check');
const querystring = require('querystring');
const { ensureLoggedIn, getDate } = require('../utils.js');

const {
  validation,
  rCreate,
  rUpdate,
  rReadOne,
  rReadAll,
} = require('../middleAccess');

const router = express.Router();

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

async function createData(req, res) {
  const {
    book = '',
    quote = '',
    chapter = '',
    year = '',
  } = req.body;

  const val = validationResult(req);
  if (!val.isEmpty()) {
    const errors = val.array();
    return res.render('form', { add: true, errors });
  }

  const result = await rCreate({
    quote, book, chapter, year,
  });

  if (result) {
    const query = querystring.stringify({ id: result.data.id });
    return res.redirect(`/thanks?${query}`);
  }
  return res.render('error', { err: { msg: result.error } });
}

async function getAllQuotes(req, res) {
  const result = await rReadAll();
  if (result.status === 404) {
    return res.render('error', { err: { msg: result.error } });
  }
  return res.render('data', { quotes: result.data, getDate, table: true });
}

async function updateData(req, res) {
  const {
    quote = '',
    chapter = '',
    book = '',
    year = '',
  } = req.body;

  const { id } = req.params;

  const val = validationResult(req);
  if (!val.isEmpty()) {
    const errors = val.array();
    const result = await rReadOne(id);
    return res.render('form', { update: true, errors, data: result.data });
  }

  const result = await rUpdate(Number(id), {
    chapter,
    book,
    quote,
    year,
  });

  if (result) {
    const query = querystring.stringify({ id: result.data.id });
    return res.redirect(`/thanks?${query}`);
  }
  return res.render('error', { err: { msg: result.error } });
}

async function displayUpdateForm(req, res) {
  const { id } = req.params;
  const result = await rReadOne(id);
  if (result.status === 404) {
    return res.render('error', { err: { msg: result.error } });
  }
  return res.render('form', { data: result.data, update: true });
}

async function displayAddForm(req, res) {
  res.render('form', { add: true });
}

async function thanks(req, res) {
  const result = await rReadOne(req.query.id);
  if (result.status === 404) {
    return res.render('error', { err: { msg: result.error } });
  }
  return res.render('thanks', { quote: result.data });
}

router.route('/add')
  .get(ensureLoggedIn, catchErrors(displayAddForm))
  .post(ensureLoggedIn, validation, catchErrors(createData));

router.route('/update/:id')
  .get(ensureLoggedIn, catchErrors(displayUpdateForm))
  .post(ensureLoggedIn, validation, catchErrors(updateData));

router.get('/table', ensureLoggedIn, catchErrors(getAllQuotes));

router.get('/thanks', thanks);

module.exports = router;
