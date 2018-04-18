const { check } = require('express-validator/check');
const { sanitize } = require('express-validator/filter');
const xss = require('xss');

const {
  create,
  update,
  del,
  readOne,
  readAll,
} = require('./dataAccess');


const validation = [
  check('book')
    .isLength({ min: 1, max: 255 })
    .withMessage('Bókatitill má ekki vera tómur'),

  check('quote')
    .custom(value => typeof (value) === 'string')
    .isLength({ min: 1 })
    .withMessage('Tilvitnun má ekki vera tóm'),

  check('chapter')
    .isLength({ min: 1, max: 255 })
    .withMessage('Kafli má ekki vera tómur'),

  sanitize('book').trim(),
  sanitize('quote').trim(),
  sanitize('chapter').trim(),
];

async function rCreate({
  book, quote, chapter, year,
} = {}) {
  const data = {
    book: xss(book), quote: xss(quote), chapter: xss(chapter), year: xss(year),
  };

  const result = await create(data.quote, data.book, data.chapter, data.year);
  return result;
}

async function rUpdate(id, {
  quote, book, chapter, year,
} = {}) {
  const data = {
    book: xss(book), quote: xss(quote), chapter: xss(chapter), year: xss(year),
  };

  const result = await update(id, data.quote, data.book, data.chapter, data.year);
  return result;
}

async function rDel(id) {
  const result = await del(id);
  return result;
}

async function rReadOne(id) {
  const result = await readOne(id);

  return result;
}

async function rReadAll() {
  const result = await readAll();
  return result;
}

module.exports = {
  validation,
  rCreate,
  rUpdate,
  rDel,
  rReadOne,
  rReadAll,
};
