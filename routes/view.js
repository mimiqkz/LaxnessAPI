const express = require('express');
const { validationResult } = require('express-validator/check');
const querystring = require('querystring');
const { ensureLoggedIn } = require('../utils.js');

const {
  validation,
  insertQuote,
  updateQuote,
  readQuote,
  readAllQuotes,
} = require('../middleAccess');

const router = express.Router();

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

const createData = async (req, res) => {
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

  const result = await insertQuote({
    quote, book, chapter, year,
  });

  if (result) {
    const query = querystring.stringify({ id: result.data.id });
    return res.redirect(`/thanks?${query}`);
  }
  return res.render('error', { err: { msg: result.error } });
};

const getAllQuotes = async (req, res) => {
  const result = await readAllQuotes();
  if (result.status === 404) {
    return res.render('error', { err: { msg: result.error } });
  }
  return res.render('data', { quotes: result.data, table: true });
};

const updateData = async (req, res) => {
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
    const result = await readQuote(id);
    return res.render('form', { update: true, errors, data: result.data });
  }

  const result = await updateQuote(Number(id), {
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
};

const displayUpdateForm = async (req, res) => {
  const { id } = req.params;
  const result = await readQuote(id);
  if (result.status === 404) {
    return res.render('error', { err: { msg: result.error } });
  }
  return res.render('form', { data: result.data, update: true });
};

const displayAddForm = (req, res) => {
  res.render('form', { add: true });
};

const thanks = async (req, res) => {
  const result = await readQuote(req.query.id);
  if (result.status === 404) {
    return res.render('error', { err: { msg: result.error } });
  }
  return res.render('thanks', { quote: result.data });
};

router.route('/add')
  .get(ensureLoggedIn, catchErrors(displayAddForm))
  .post(ensureLoggedIn, validation, catchErrors(createData));

router.route('/update/:id')
  .get(ensureLoggedIn, catchErrors(displayUpdateForm))
  .post(ensureLoggedIn, validation, catchErrors(updateData));

router.get('/table', ensureLoggedIn, catchErrors(getAllQuotes));

router.get('/thanks', thanks);

module.exports = router;
