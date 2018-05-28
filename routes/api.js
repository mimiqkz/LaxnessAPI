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

async function getQuote(req, res) {
  const id = req.params.slug;
  rReadOne(id)
    .then(data => res.status(data.status).json(data.data))
    .catch(err => console.error(err));
}

async function getDailyQuote(req, res) {
  res.redirect(`/api/${getToday()}`);
}

async function saveImgToDisk(req, res) {
  let { base64 } = req.body;
  base64 = base64.replace(/^data:image\/png;base64,/, '');
  const imageName = `../public/day${getToday()}.png`;
  try {
    fs.readFile(path.join(__dirname, imageName), (data) => {
      console.info(data);
    });
  } catch (error) {
    console.error(error);
    try {
      fs.writeFile(path.join(__dirname, imageName), base64, 'base64', () => {
        console.info('witing to disc', path.join(__dirname, '../public/out.png'));
      });
    } catch (err) {
      console.error('ERROR:', err);
    }
  }
  const imgURL = `${req.get('host')}/api/img/${getToday()}`;
  res.json({ link: imgURL });
}
async function renderImage(req, res) {
  const { id } = req.params;
  const imageName = `../public/day${id}.png`;
  
  try {
    fs.readFile(path.join(__dirname, imageName), () => {
      console.info(`/day${id}.png`);
      res.render('image', { image: `/day${id}.png` });
    });
  } catch (err) {
    res.json({ error: 'somthing whent wrong' });
    console.error(err);
  }
}

router.post('/img', catchErrors(saveImgToDisk));

router.get('/img/:id', catchErrors(renderImage));

router.get('/today', catchErrors(getDailyQuote));

router.route('/:slug')
  .get(catchErrors(getQuote))
  .delete(ensureLoggedIn, catchErrors(deleteData));

module.exports = router;
