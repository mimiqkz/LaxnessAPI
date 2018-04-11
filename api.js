const express = require('express');
const { validationResult } = require('express-validator/check');
const xss = require('xss');

const {
  validation,
  create,
  update,
  del,
  readOne,
  readAll,
  comparePasswords,
  findByUsername,
  findById,
} = require('./dataAccess');

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
  const result = update(number, {
    chapter, book, quote, year,
  });
  if (result) {
    return res.status(201).json(result.item);
  }
  return res.json({ error: 'Note not found' });
}

async function deleteData(req, res) {
  const { id } = req.params;
  const result = await del(id);

  if (result) {
    return res.status(204).json({});
  }

  return res.status(404).json({ error: 'Note not found' });
}

async function readAQuote(req, res, id) {
  readOne(id)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        return res.status(404).json({ error: 'Note not found' });
      }
    })
    .catch(err => console.error(err));
}

/**
 * Dislay the data according to date
 */
router.get('/table', ensureLoggedIn, (req, res) => {
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

router.get('/', async (req, res) => {
  readAll()
    .then(data => res.json(data))
    .catch(err => console.error(err));
});

router.route('/form')
  .get(ensureLoggedIn, (req, res) => {
    const data = {};
    res.render('form', { data, title: 'Form' });
  })
  .post(ensureLoggedIn, validation, catchErrors(createData));

router.route('/update')
  .get(ensureLoggedIn, (req, res) => {
    const data = {};
    res.render('form', { data, title: 'Form' });
  })
  .post(ensureLoggedIn, validation, catchErrors(updateData));

router.get('/thanks', thanks);

router.get('/today', async (req, res) => {
  const day = getToday();
  await readAQuote(req, res, day);
});

/**
 * Show the quote according to the id input from the slug
 */
router.get('/:slug', async (req, res) => {
  const id = req.params.slug;
  await readAQuote(req, res, id);
});

router.delete('/:slug', ensureLoggedIn, catchErrors(deleteData));

module.exports = router;
