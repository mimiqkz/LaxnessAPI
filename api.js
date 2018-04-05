const express = require('express');
const { validationResult } = require('express-validator/check');
const xss = require('xss');

const {
  validation,
  create,
  readAll,
  readOne,
  update,
  del,
} = require('./notes');

let isUpdate = false;

const { ensureLoggedIn, getToday, getDate } = require('./utils.js');

const router = express.Router();

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

function thanks(req, res) {
  return res.render('thanks', { title: 'Takk fyrir' });
}

async function createData(req, res) {
  const {
    book = '',
    quote = '',
    chapter = '',
    year = '',
  } = req.body;

  const data = {
    book: xss(book),
    quote: xss(quote),
    chapter: xss(chapter),
    year: xss(year),
  };

  const val = validationResult(req);
  if (!val.isEmpty()) {
    const errors = val.array();
    return res.render('form', { errors, data, title: 'Form' });
  }

  await create({
    book, quote, chapter, year,
  });
  return res.redirect('/api/thanks');
}

async function updateData(req, res) {
  const {
    number = '',
    chapter = '',
    book = '',
    quote = '',
    year = '',
  } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(i => ({ field: i.param, error: i.msg }));
    return res.status(404).json(errorMessages);
  }
  const upd = update(number, {
    chapter, book, quote, year,
  });
  if (upd) {
    return res.json(upd[0]);
  }
  return res.json({ error: 'Note not found' });
}

/**
 * Dislay the data according to date
 */
router.get('/date', ensureLoggedIn, (req, res) => {
  readAll()
    .then((data) => {
      const now = new Date(2018, 0);
      now.setDate(23);
      console.info(now);
      res.render('data', { quotes: data, getDate });
    }).catch(err => console.error(err));
});

/**
 * Switching between creating and updating new data
 */
router.get('/switch', ensureLoggedIn, (req, res) => {
  isUpdate = !isUpdate;
  res.render('form', { data: {}, update: isUpdate });
});

async function deleteData(req, res) {
  const success = await del(req.params.slug);
  if (success[0].count === '1') {
    return res.send(null);
  }
  return res.json({ error: 'Note not found' });
}

router.route('/form')
  .get(ensureLoggedIn, (req, res) => {
    const data = {};
    res.render('form', { data, title: 'Form' });
  })
  .post(ensureLoggedIn, validation, catchErrors(createData))

router.route('/update')
  .get(ensureLoggedIn, (req, res) => {
    const data = {};
    res.render('form', { data, title: 'Form' });
  })
  .post(ensureLoggedIn, validation, catchErrors(updateData));

/**
 * Get raw data
 */
router.get('/', async (req, res) => {
  readAll()
    .then(data => res.json(data))
    .catch(err => console.error(err));
});

router.get('/thanks', thanks);

/**
 * Get the quote of today
 */
router.get('/today', async (req, res) => {
  const day = getToday();
  readOne(day)
    .then((data) => {
      if (data[0]) {
        res.json(data[0]);
      } else {
        res.json({ error: 'Note not found' });
      }
    })
    .catch(err => console.error(err));
}, catchErrors());

/**
 * Show the quote according to the id input from the slug
 */
router.get('/:slug', async (req, res) => {
  readOne(req.params.slug)
    .then((data) => {
      if (data[0]) {
        res.json(data[0]);
      } else {
        res.json({ error: 'Note not found' });
      }
    })
    .catch(err => console.error(err));
}, catchErrors());

router.delete('/:slug', ensureLoggedIn, catchErrors(deleteData));

module.exports = router;
