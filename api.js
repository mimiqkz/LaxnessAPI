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

/* todo útfæra api */
router.get('/', (req, res) => {
  res.json(readAll);
});
router.post('/', (req, res) => {
  const {
    body: {
      title = '',
      text = '',
      datetime = '',
    } = {},
  } = req;
  create(title, text, datetime);
  res.json({ title: title, text: text, datetime: datetime }); // eslint-disable-line
});


module.exports = router;
