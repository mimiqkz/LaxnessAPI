const express = require('express');
const { validationResult } = require('express-validator/check');

const {
  validation,
  create,
  readAll,
  readOne,
  update,
  del,
} = require('./notes');

const { ensureLoggedIn } = require('./utils.js');

const router = express.Router();

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

async function createData(req, res) {
  const {
    book = '',
    quote = '',
    year = '',
  } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(i => ({ field: i.param, error: i.msg }));
    return res.status(404).json(errorMessages);
  }

  const q = await create({ book, quote, year });
  return res.json(q.rows);
}

async function updateData(req, res) {
  const {
    book = '',
    quote = '',
    year = '',
  } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(i => ({ field: i.param, error: i.msg }));
    return res.status(404).json(errorMessages);
  }

  const upd = update(req.params.slug, { book, quote, year });
  if (upd) {
    return res.json(upd);
  }
  return res.json({ error: 'Note not found' });
}

async function deleteData(req, res) {
  const success = await del(req.params.slug);
  if (success[0].count === '1') {
    return res.send(null);
  }
  return res.json({ error: 'Note not found' });
}
router.post('/', validation, catchErrors(createData));

router.get('/', async (req, res) => {
  readAll()
    .then(data => res.json(data))
    .catch(err => console.error(err));
});

router.get('/:slug', async (req, res) => {
  readOne(req.params.slug)
    .then((data) => {
      if (data[0]) {
        res.json(data);
      } else {
        res.json({ error: 'Note not found' });
      }
    })
    .catch(err => console.error(err));
}, catchErrors());

router.put('/:slug', ensureLoggedIn, validation, catchErrors(updateData));
router.delete('/:slug', ensureLoggedIn, catchErrors(deleteData));

module.exports = router;
