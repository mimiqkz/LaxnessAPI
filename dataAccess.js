const { Client } = require('pg');
const bcrypt = require('bcrypt');

const connectionString =
  process.env.DATABASE_URL || 'postgres://postgres:123@localhost/postgres';

/**
 * Execute an SQL query.
 *
 * @param {string} sqlQuery - SQL query to execute
 * @param {array} [values=[]] - Values for parameterized query
 *
 * @returns {Promise} Promise representing the result of the SQL query
 */
const query = async (sqlQuery, values = []) => {
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
};

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
const INSERT_QUOTE = async (quote, book, chapter, year) => {
  const q =
    'INSERT INTO quotes(quote, book, chapter, year) VALUES($1, $2, $3, $4) RETURNING *';
  const res = await query(q, [quote, book, chapter, year]);
  if (res.rowCount === 0) {
    return { status: 500, data: { error: 'Error inserting data' } };
  }
  return { status: 200, data: res.rows[0] };
};

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
const UPDATE_QUOTE = async (id, quote, book, chapter, year) => {
  const q = `UPDATE quotes
    SET quote = $1, book = $2, chapter = $3, year = $4
    WHERE id = $5 RETURNING *`;
  const res = await query(q, [quote, book, chapter, year, id]);
  if (res.rowCount === 0) {
    return { status: 404, data: { error: 'Quote not found' } };
  }
  return { status: 200, data: res.rows[0] };
};

/**
 * Delete a note asynchronously.
 *
 * @param {number} id - Id of note to delete
 *
 * @returns {Promise} Promise representing the boolean result of creating the note
 */
const DELETE_QUOTE = async (id) => {
  const sqlQuery = 'DELETE FROM quotes WHERE id = $1';
  const res = await query(sqlQuery, [id]);
  if (res.rowsCount === 0) {
    return { status: 404, data: { error: 'Quote not found' } };
  }
  return { status: 204, data: res.rows[0] };
};

/**
 * Read a single book by id
 *
 * @param {number} id - Id of book
 *
 * @returns {Promise} Promise representing the book object or null if not found
 */
const READ_QUOTE = async (id) => {
  const sqlQuery = 'SELECT * FROM quotes WHERE id = $1';
  const res = await query(sqlQuery, [id]);
  if (res.rowCount === 0) {
    return { status: 404, data: { error: 'Quote not found' } };
  }
  return { status: 200, data: res.rows[0] };
};

/**
 * Read all quotes.
 *
 * @returns {Promise} Promise representing an array of all book objects
 */
const READ_ALL_QUOTES = async () => {
  const sqlQuery = 'SELECT * FROM quotes ORDER BY id';
  const res = await query(sqlQuery);
  if (res.rowCount === 0) {
    return { status: 500, data: { error: 'Error reading quotes' } };
  }
  return { status: 200, data: res.rows };
};

/**
 * User part
 */
const comparePasswords = async (password, hash) =>
  bcrypt.compare(password, hash);

const findByUsername = async (username) => {
  const q = 'SELECT * FROM users WHERE username = $1';
  const result = await query(q, [username]);
  if (result.rowCount === 1) {
    return result.rows[0];
  }

  return null;
};

const findById = async (id) => {
  const q = 'SELECT * FROM users WHERE id = $1';

  const result = await query(q, [id]);

  if (result.rowCount === 1) {
    return result.rows[0];
  }

  return null;
};

module.exports = {
  INSERT_QUOTE,
  UPDATE_QUOTE,
  DELETE_QUOTE,
  READ_QUOTE,
  READ_ALL_QUOTES,
  comparePasswords,
  findByUsername,
  findById,
};
