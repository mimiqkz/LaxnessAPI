const { Client } = require('pg');
const bcrypt = require('bcrypt');
const xss = require('xss');
const { check } = require('express-validator/check');
const { sanitize } = require('express-validator/filter');

const connectionString = process.env.DATABASE_URL || 'postgres://postgres:123@localhost/hugbo';

/**
 * Execute an SQL query.
 *
 * @param {string} sqlQuery - SQL query to execute
 * @param {array} [values=[]] - Values for parameterized query
 *
 * @returns {Promise} Promise representing the result of the SQL query
 */
async function query(sqlQuery, values = []) {
  const client = new Client({ connectionString });
  await client.connect();

  let result;

  try {
    result = await client.query(sqlQuery, values);
  } catch (err) {
    console.error('Error executing query', err);
    throw err;
  } finally {
    await client.end();
  }

  return result;
}

const validation = [
  check('book')
    .isLength({ min: 1, max: 255 })
    .withMessage('Title of book must be a string of length 1 to 255 characters'),

  check('quote')
    .custom(e => typeof (e) === 'string')
    .withMessage('quote must be a string'),

  check('chapter')
    .isLength({ min: 1, max: 255 })
    .withMessage('Reitur: \'kafli\' má ekki vera tómur'),

  sanitize('book').trim(),
  sanitize('quote').trim(),
  sanitize('chapter').trim(),
];


/**
 * Quotes part
 *
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

  const q = 'INSERT INTO quotes(book, quote, chapter, year) VALUES($1, $2, $3, $4) RETURNING *';
  const values = [data.book, data.quote, data.chapter, data.year];

  const result = await query(q, values);
  return result.rows[0];
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
  const q = `UPDATE quotes
  SET chapter = $1, book = $2, quote = $3, year = $4
  WHERE id = $5 RETURNING *`;
  const values = [data.book, data.quote, data.chapter, data.year, id];

  const result = await query(q, values);
  return result.rows[0];
}

/**
 * Delete a note asynchronously.
 *
 * @param {number} id - Id of note to delete
 *
 * @returns {Promise} Promise representing the boolean result of creating the note
 */
async function del(id) {
  const sqlQuery = 'DELETE FROM quotes WHERE id = $1';
  const result = await query(sqlQuery, [id]);

  return result.rowCount === 1;
}

/**
 * Read a single book by id
 *
 * @param {number} id - Id of book
 *
 * @returns {Promise} Promise representing the book object or null if not found
 */
async function readOne(id) {
  const sqlQuery = 'SELECT * FROM quotes WHERE id = $1';

  const result = await query(sqlQuery, [id]);

  if (result.rows.length === 0) {
    return null;
  }

  return result.rows[0];
}

/**
 * Read all quotes.
 *
 * @returns {Promise} Promise representing an array of all book objects
 */
async function readAll() {
  /* todo útfæra */
  const sqlQuery = 'SELECT * FROM quotes ORDER BY id';
  const result = await query(sqlQuery);

  return result.rows;
}

/**
 * User part
 */
async function comparePasswords(password, hash) {
  const result = await bcrypt.compare(password, hash);

  return result;
}

async function findByUsername(username) {
  const q = 'SELECT * FROM users WHERE username = $1';
  const result = await query(q, [username]);
  if (result.rowCount === 1) {
    return result.rows[0];
  }

  return null;
}

async function findById(id) {
  const q = 'SELECT * FROM users WHERE id = $1';

  const result = await query(q, [id]);

  if (result.rowCount === 1) {
    return result.rows[0];
  }

  return null;
}

module.exports = {
  validation,
  create,
  update,
  del,
  readOne,
  readAll,
  comparePasswords,
  findByUsername,
  findById,
};
