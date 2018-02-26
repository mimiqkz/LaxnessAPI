const express = require('express');

const {
  create,
  readAll,
  readOne,
  update,
  del,
} = require('./notes');

const router = express.Router();

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

/* todo útfæra api */
router.get('/', (req, res) => {
  res.json(readAll);
});
router.post('/', (req, res) => {
  const { body: {
    titli = '',
    texti = '',
  }
 } = req.body;
 console.log(titli);
});


module.exports = router;
