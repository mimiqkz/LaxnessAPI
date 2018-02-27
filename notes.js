/* todo sækja pakka sem vantar  */
const {
  saveToDb,
  fetchData,
  runQuery,
} = require('./db');
const xss = require('xss');

/**
 * Create a note asynchronously.
 *
 * @param {Object} note - Note to create
 * @param {string} note.title - Title of note
 * @param {string} note.text - Text of note
 * @param {string} note.datetime - Datetime of note
 *
 * @returns {Promise} Promise representing the object result of creating the note
 */
async function create({ title, text, datetime } = {}) {
  const data = {
    title: xss(title),
    text: xss(text),
    datetime: xss(datetime),
  };
  const r = await saveToDb(data);
  return r;
}

/**
 * Read all notes.
 *
 * @returns {Promise} Promise representing an array of all note objects
 */
async function readAll() {
  const r = await fetchData();
  return r;
}

/**
 * Read a single note.
 *
 * @param {number} id - Id of note
 *
 * @returns {Promise} Promise representing the note object or null if not found
 */
async function readOne(id) {
  const qurey = `SELECT * FROM notes WHERE id =  ${id} `;
  const r = await runQuery(qurey);
  return r;
}

/**
 * Update a note asynchronously.
 *
 * @param {number} id - Id of note to update
 * @param {Object} note - Note to create
 * @param {string} note.title - Title of note
 * @param {string} note.text - Text of note
 * @param {string} note.datetime - Datetime of note
 *
 * @returns {Promise} Promise representing the object result of creating the note
 */
async function update(id, { title, text, datetime } = {}) {
    const data = { // eslint-disable-line
    title: xss(title),
    text: xss(text),
    datetime: xss(datetime),
  };
  // 'INSERT INTO notes(title, text, datetime ) VALUES($1, $2, $3 ) RETURNING *'
  const qurey = `UPDATE notes SET title = '${title}', text = '${text}', datetime = '${datetime}' WHERE id =  ${id} RETURNING *`;
  const response = await runQuery(qurey);
  return response;
}

/**
 * Delete a note asynchronously.
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
};
