const {
  saveToDb,
  fetchData,
  runQuery,
} = require('./db');
const { check } = require('express-validator/check');
const { sanitize } = require('express-validator/filter');

const validation = [
  check('book')
    .isLength({ min: 1, max: 255 })
    .withMessage('Title must be a string of length 1 to 255 characters'),

  check('quote')
    .custom(e => typeof (e) === 'string')
    .withMessage('Text must be a string'),

  check('year')
    .isISO8601('datetime')
    .withMessage('Datetime must be a ISO 8601 date'),

  sanitize('book').trim(),
];


const xss = require('xss');

/**
 * Create a qoute asynchronously.
 *
 * @param {Object} quote - Note to create
 * @param {string} quote.book - Title of note
 * @param {string} quote.quote - Text of note
 * @param {string} quote.year - Datetime of note
 *
 * @returns {Promise} Promise representing the object result of creating the note
 */
async function create({ book, quote, year } = {}) {
  const data = {
    book: xss(book),
    quote: xss(quote),
    year: xss(year),
  };
  const r = await saveToDb(data);
  return r;
}

/**
 * Read all qoute.
 *
 * @returns {Promise} Promise representing an array of all note objects
 */
async function readAll() {
  const r = await fetchData();
  return r;
}

/**
 * Read a single qoute.
 *
 * @param {number} id - Id of note
 *
 * @returns {Promise} Promise representing the note object or null if not found
 */
async function readOne(id) {
  const qurey = `SELECT * FROM quotes WHERE id =  ${id} `;
  const r = await runQuery(qurey);
  return r;
}

/**
 * Update a qoute asynchronously.
 *
 * @param {number} id - Id of note to update
 * @param {Object} quote - Note to create
 * @param {string} quote.title - Title of note
 * @param {string} quote.text - Text of note
 * @param {string} quote.year - Datetime of note
 *
 * @returns {Promise} Promise representing the object result of creating the note
 */
async function update(id, { book, quote, year } = {}) {
    const data = { // eslint-disable-line
    book: xss(book),
    quote: xss(quote),
    year: xss(year),
  };
  const qurey = `UPDATE quotes SET title = '${book}', text = '${quote}', datetime = '${year}' WHERE id =  ${id} RETURNING *`;
  const response = await runQuery(qurey);
  return response;
}

/**
 * Delete a quote asynchronously.
 *
 * @param {number} id - Id of note to delete
 *
 * @returns {Promise} Promise representing the boolean result of creating the note
 */
async function del(id) {
  const qurey = `DELETE FROM notes WHERE id = ${id}`;
  const result = await runQuery(qurey);
  return result.rowCount === 1;
}

module.exports = {
  create,
  readAll,
  readOne,
  update,
  del,
  validation,
};
