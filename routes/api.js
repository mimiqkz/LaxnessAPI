const express = require('express');
const { ensureLoggedIn, getToday } = require('../utils.js');
const path = require('path');
const { catchErrors } = require('../utils');

const {
  deleteQuote,
  readQuote,
} = require('../middleAccess');

const router = express.Router();

const deleteData = async (req, res) => {
  try {
    const data = await deleteQuote(req.params);
    res.status(data.status).json(data.data);
  } catch (err) {
    console.error(err);
  }
};

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const getQuote = async (req, res) => {
  const id = req.params.slug;
  try {
    const quote = await readQuote(id);
    return res.status(quote.status).json(quote.data);
  } catch (err) {
    res.status(500).json(err);
  }
  return res.redirect(`/api/${getRandomInt(282)}`);
};

const getDailyQuote = async (req, res) => {
  const today = await getToday();
  readQuote(today)
    .then((data) => {
      if (data.status !== 404) {
        res.status(data.status).json(data.data);
      } else {
        res.redirect(`/api/${getRandomInt(282)}`);
      }
    })
    .catch(error => res.status(500).json(error));
};

const sendImage = async (req, res) => {
  const imageName = '../quote.png';
  res.sendFile(path.join(__dirname, imageName));
};

router.get('/img', catchErrors(sendImage));

router.get('/today', catchErrors(getDailyQuote));

router.route('/:slug')
  .get(catchErrors(getQuote))
  .delete(ensureLoggedIn, catchErrors(deleteData));

module.exports = router;
