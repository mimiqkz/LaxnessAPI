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

const { ensureLoggedIn } = require('./utils.js');

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
  const upd = update(req.params.slug, {
    chapter, book, quote, year,
  });
  if (upd) {
    return res.json(upd[0]);
  }
  return res.json({ error: 'Note not found' });
}
function getDate(year, day) {
  const now = new Date(year, 0);
  now.setDate(day);
  return now;
}
router.get('/date', ensureLoggedIn, (req, res) => {
  readAll()
    .then((data) => {
      const now = new Date(2018, 0);
      now.setDate(23);
      console.info(now);
      res.render('calender', { qoutes: data, getDate });
    }).catch(err => console.error(err));
});

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

router.post('/form', ensureLoggedIn, validation, catchErrors(createData));
router.get('/form', ensureLoggedIn, (req, res) => {
  const data = {};
  res.render('form', { data, title: 'Form' });
});

router.get('/', async (req, res) => {
  readAll()
    .then(data => res.json(data))
    .catch(err => console.error(err));
});
router.get('/thanks', thanks);

router.get('/today', async (req, res) => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
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
