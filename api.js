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

router.get('/:slug', async (req, res) => {
  const r = await readOne(req.url.substring(1));
  res.json(r[0]);
});

router.put('/:slug', async (req, res) => {
  // curl -X PUT -H "Content-Type: application/json" -d '{"title": "Bless", "text": "", "datetime": "2018-02-18"}' http://localhost:3000/1
  const {
    title = '',
    text = '',
    datetime = '',
  } = req.body;
  const u = await update(req.url.substring(1), { title, text, datetime });
  res.json(u);
});

router.delete(':slug', async (req, res) => {
  // curl -X DELETE http://localhost:3000/1
  await del();
  res.send(null);
});

module.exports = router;
