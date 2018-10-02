const express = require('express');
const { ensureLoggedIn, getToday } = require('../utils.js');
const fs = require('fs');
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

async function getDailyQuote(req, res) {
  readQuote(getToday())
    .then((data) => {
      if (data.status !== 404) {
        res.status(data.status).json(data.data);
      } else {
        res.redirect(`/api/${getRandomInt(282)}`);
      }
    })
    .catch(error => res.status(500).json(error));
}

const saveImgToDisk = async (req, res) => {
  let { base64 } = req.body;
  const imgURL = `${req.get('host')}/day${getToday()}.png`;
  if (!base64) {
    return res.json({ error: 'base64 cant be null', link: imgURL });
  }
  base64 = base64.replace(/^data:image\/png;base64,/, '');
  const imageName = `../public/day${getToday()}.png`;
  try {
    fs.writeFile(path.join(__dirname, imageName), base64, 'base64', () => {
      console.info('witing to disc', path.join(__dirname, imageName));
    });
  } catch (err) {
    console.error('ERROR:', err);
    return res.json({ error: err, link: imgURL });
  }
  return res.json({ link: imgURL });
};

const renderImage = async (req, res) => {
  const { id } = req.params;
  const imageName = `../public/day${id}.png`;
  try {
    fs.readFile(path.join(__dirname, imageName), () => {
      console.info(`/day${id}.png`);
      return res.render('image', { image: `/day${id}.png` });
    });
  } catch (err) {
    console.error(err);
    return res.json({ error: 'somthing whent wrong' });
  }
};

router.post('/img', (saveImgToDisk));

router.get('/img/:id', catchErrors(renderImage));

router.get('/today', getDailyQuote);

router.route('/:slug')
  .get(catchErrors(getQuote))
  .delete(ensureLoggedIn, catchErrors(deleteData));

module.exports = router;
