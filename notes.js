const db = require('./db.js');
const xss = require('xss');
const { check } = require('express-validator/check');
const { sanitize } = require('express-validator/filter');

const validation = [
  check('book')
    .isLength({ min: 1, max: 255 })
    .withMessage('Title of book must be a string of length 1 to 255 characters'),

  check('quote')
    .custom(e => typeof (e) === 'string')
    .withMessage('quote must be a string'),

  check('chapter')
    .isLength({ min: 1, max: 255 })
    .withMessage('chapter must be a string of length 1 to 255 charecters'),

  sanitize('book').trim(),
];

/**
 * Create a book asynchronously.
 *
 * @param {Object} book - book to create
 * @param {string} book.book - Title of book
 * @param {string} book.chapter - Chapter of book
 * @param {string} book.title - Quote of book
 * @param {string} book.year - Year of book
 *
 * @returns {Promise} Promise representing the object result of creating the book
 */
async function create({
  book, quote, chapter, year,
} = {}) {
  const data = {
    book: xss(book),
    quote: xss(quote),
    chapter: xss(chapter),
    year: xss(year),
  };

  const query = await db.saveToDb(data);
  return query;
}

/**
 * Read all quotes.
 *
 * @returns {Promise} Promise representing an array of all book objects
 */
async function readAll() {
  /* todo útfæra */
  let query = null;
  try {
    query = await db.fetchData();
    return query;
  } catch (err) { console.error(err); }
  return query;
}

/**
 * Read a single book by id
 *
 * @param {number} id - Id of book
 *
 * @returns {Promise} Promise representing the book object or null if not found
 */
async function readOne(id) {
  /* todo útfæra */
  let query = null;
  try {
    query = await db.runQuery(`SELECT * FROM quotes WHERE id = ${id}`);
    return query;
  } catch (err) { console.error(err); }
  return query;
}

/**
 * Update a book asynchronously.
 *
 * @param {number} id - Id of book to update
 * @param {Object} book - book to create
 * @param {string} book.book - Title of book
 * @param {string} book.chapter - Chapter of the book
 * @param {string} book.quote - Quote of the book
 * @param {string} book.year - year of book
 *
 * @returns {Promise} Promise representing the object result of creating the book
 */
async function update(id, {
  chapter, book, quote, year,
} = {}) {
  const data = {
    chapter: xss(chapter),
    book: xss(book),
    quote: xss(quote),
    year: xss(year),
  };
  const query = await db.runQuery(`UPDATE quotes
  SET year = '${data.year}', book = '${data.book}', quote = '${data.quote}', chapter = '${data.chapter}'
  WHERE id = ${id} RETURNING *`);
  return query;
}

/**
 * Delete a book asynchronously.
 *
 * @param {number} id - Id of book to delete
 *
 * @returns {Promise} Promise representing the boolean result of creating the book
 */
async function del(id) {
  const query = await db.runQuery(`WITH deleted AS 
  (DELETE FROM quotes WHERE id = ${id} RETURNING *) 
  SELECT count(*) FROM deleted`);
  return query;
}

module.exports = {
  validation,
  create,
  readAll,
  readOne,
  update,
  del,
};
