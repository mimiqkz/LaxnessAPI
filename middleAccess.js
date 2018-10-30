const { check } = require('express-validator/check');
const { sanitize } = require('express-validator/filter');
const xss = require('xss');

const {
  INSERT_QUOTE, UPDATE_QUOTE, DELETE_QUOTE, READ_QUOTE,
  READ_ALL_QUOTES, INSERT_IMAGE, UPDATE_IMAGE, READ_IMAGE,
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

const insertQuote = async ({
  book, quote, chapter, year,
} = {}) => {
  const data = {
    book: xss(book),
    quote: xss(quote),
    chapter: xss(chapter),
    year: xss(year),
  };

  const result = await INSERT_QUOTE(data.quote, data.book, data.chapter, data.year);
  return result;
};

const updateQuote = async (id, {
  quote, book, chapter, year,
} = {}) => {
  const data = {
    book: xss(book),
    quote: xss(quote),
    chapter: xss(chapter),
    year: xss(year),
  };

  const result = await UPDATE_QUOTE(
    id,
    data.quote,
    data.book,
    data.chapter,
    data.year,
  );
  return result;
};

const deleteQuote = async id => DELETE_QUOTE(id);

const readQuote = async id => READ_QUOTE(id);

const readAllQuotes = async () => READ_ALL_QUOTES();

const insertImage = async (base64) => {
  const result = await INSERT_IMAGE(base64);
  return result;
};

const updateImage = async (base64) => {
  const result = await UPDATE_IMAGE(base64);
  return result;
};

const readImage = async () => READ_IMAGE();

module.exports = {
  validation,
  insertQuote,
  updateQuote,
  deleteQuote,
  readQuote,
  readAllQuotes,
  insertImage,
  updateImage,
  readImage,
};
