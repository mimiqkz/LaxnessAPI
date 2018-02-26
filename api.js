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
  await create({ title, text, datetime });
  res.json({ title: title, text: text, datetime: datetime }); // eslint-disable-line
}

/* todo útfæra api */
router.get('/', (req, res) => {
  res.json(readAll);
});
router.post('/', getAndInsert);

module.exports = router;
