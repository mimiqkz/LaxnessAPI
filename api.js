const express = require('express');

const {
  create,
  readAll,
  readOne,
  update,
  del,
} = require('./notes');

const router = express.Router();

function catchErrors(fn) { // eslint-disable-line
  return (req, res, next) => fn(req, res, next).catch(next);
}

async function getAndInsert(req, res) {
  const {
    title = '',
    text = '',
    datetime = '',
  } = req.body;
  const r = await create({ title, text, datetime });
  res.json(r[0]); // eslint-disable-line
}

/* todo útfæra api */
router.get('/', async (req, res) => {
  const r = await readAll();
  res.json(r);
});
router.post('/', getAndInsert);

module.exports = router;
