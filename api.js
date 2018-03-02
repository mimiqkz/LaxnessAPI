const { validationResult } = require('express-validator/check');

const express = require('express');

const {
  create,
  readAll,
  readOne,
  update,
  del,
  validation,
} = require('./notes');

const router = express.Router();

function catchErrors(fn) { // eslint-disable-line
  return (req, res, next) => fn(req, res, next).catch(next);
}

async function getAndInsert(req, res) {
  const {
    book = '',
    quote = '',
    year = '',
  } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(i => ({ field: i.params, error: i.msg }));
    return res.status(404).json(errorMessages[0]);
  }
  const r = await create({ book, quote, year });
  return res.json(r[0]); // eslint-disable-line
}

/* todo útfæra api */
router.get('/', async (req, res) => {
  const r = await readAll();
  res.json(r[0]);
});
router.post('/', validation, getAndInsert);

router.get('/:slug', async (req, res) => {
  const r = await readOne(req.url.substring(1));
  res.json(r[0]);
});

router.put('/:slug', validation, async (req, res) => {
  // curl -X PUT -H "Content-Type: application/json" -d '{"title": "Bless", "text": "", "datetime": "2018-02-18"}' http://localhost:3000/1
  const {
    book = '',
    quote = '',
    year = '',
  } = req.body;
  const u = await update(req.url.substring(1), { book, quote, year });
  console.info(u);
  res.json(u);
});

router.delete('/:slug', async (req, res) => {
  // curl -X DELETE http://localhost:3000/1
  const tokst = await del(req.params.slug);
  if (tokst) {
    res.send(null);
  } else {
    res.json({ mesage: 'quote not found' });
  }
});

module.exports = router;
