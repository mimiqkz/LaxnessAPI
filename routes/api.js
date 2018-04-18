const express = require('express');
const { ensureLoggedIn, getToday } = require('../utils.js');

const {
  rDel,
  rReadOne,
} = require('../middleAccess');

const router = express.Router();

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

async function deleteData(req, res) {
  rDel(req.params)
    .then(data => res.status(data.status).json(data.data))
    .catch(err => console.error(err));
}

async function getQuote(req, res) {
  const id = req.params.slug;
  rReadOne(id)
    .then(data => res.status(data.status).json(data.data))
    .catch(err => console.error(err));
}

async function getDailyQuote(req, res) {
  res.redirect(`/api/${getToday()}`);
}

router.get('/today', catchErrors(getDailyQuote));

router.route('/:slug')
  .get(catchErrors(getQuote))
  .delete(ensureLoggedIn, catchErrors(deleteData));

module.exports = router;
