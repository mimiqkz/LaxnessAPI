const { check } = require('express-validator/check');
const { sanitize } = require('express-validator/filter');
const xss = require('xss');

const {
  create, update, del, readOne, readAll,
} = require('./dataAccess');

const validation = [
  check('book')
    .isLength({ min: 1, max: 255 })
    .withMessage('Bókatitill má ekki vera tómur'),

  check('quote')
    .custom(value => typeof value === 'string')
    .isLength({ min: 1 })
    .withMessage('Tilvitnun má ekki vera tóm'),

  check('chapter')
    .isLength({ min: 1, max: 255 })
    .withMessage('Kafli má ekki vera tómur'),

  sanitize('book').trim(),
  sanitize('quote').trim(),
  sanitize('chapter').trim(),
];

const rCreate = async ({
  book, quote, chapter, year,
} = {}) => {
  const data = {
    book: xss(book),
    quote: xss(quote),
    chapter: xss(chapter),
    year: xss(year),
  };

  const result = await create(data.quote, data.book, data.chapter, data.year);
  return result;
};

const rUpdate = async (id, {
  quote, book, chapter, year,
} = {}) => {
  const data = {
    book: xss(book),
    quote: xss(quote),
    chapter: xss(chapter),
    year: xss(year),
  };

  const result = await update(
    id,
    data.quote,
    data.book,
    data.chapter,
    data.year,
  );
  return result;
};

const rDel = async id => del(id);

const rReadOne = async id => readOne(id);

const rReadAll = async () => readAll();

module.exports = {
  validation,
  rCreate,
  rUpdate,
  rDel,
  rReadOne,
  rReadAll,
};
