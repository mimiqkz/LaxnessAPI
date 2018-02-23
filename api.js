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
app.get('/', (req, res) => {
  res.json(readAll);
});
app.post('/', (req, res) => {
  const { body: {
    titli = '',
    texti = '',
  }
 } = req.body;
 console.log(titli);
});


module.exports = router;
