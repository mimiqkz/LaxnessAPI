const express = require('express');
const { ensureLoggedIn, getToday } = require('../utils.js');
const fs = require('fs');
const path = require('path');

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
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


async function getQuote(req, res) {
  const id = req.params.slug;
  rReadOne(id)
    .then(data => res.status(data.status).json(data.data))
    .catch(() => res.redirect(`/api/${getRandomInt(282)}`));
}

async function getDailyQuote(req, res) {
  rReadOne(getToday())
    .then((data) => {
      if (data.status !== 404) {
        res.status(data.status).json(data.data);
      } else {
        res.redirect(`/api/${getRandomInt(282)}`);
      }
    })
    .catch(error => res.status(500).json(error));
}

async function saveImgToDisk(req, res) {
  let { base64 } = req.body;
  if (!base64) {
    return res.json({ error: 'base64 cant be null' });
  }
  base64 = base64.replace(/^data:image\/png;base64,/, '');
  const imageName = `../public/day${getToday()}.png`;
  try {
    fs.writeFile(path.join(__dirname, imageName), base64, 'base64', () => {
      console.info('witing to disc', path.join(__dirname, imageName));
    });
  } catch (err) {
    console.error('ERROR:', err);
    return res.json({ error: err });
  }
  const imgURL = `${req.get('host')}/day${getToday()}.png`;
  return res.json({ link: imgURL });
}
async function renderImage(req, res) {
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
}

router.post('/img', (saveImgToDisk));

router.get('/img/:id', catchErrors(renderImage));

router.get('/today', getDailyQuote);

router.route('/:slug')
  .get(catchErrors(getQuote))
  .delete(ensureLoggedIn, catchErrors(deleteData));

module.exports = router;
