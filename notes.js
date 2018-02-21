/* todo sækja pakka sem vantar  */
const { Client } = require('pg');


const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost/postgres';

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
  const client = new Client({ connectionString });

  await client.connect();

  try {
    const result = await client.query('INSERT INTO notes(title, text, datetime) VALUES($1, $2, $3) RETURNING *', [title, text, datetime]);
    console.info(result);

    const { rows } = result;
    return rows;
  } catch (err) {
    console.error('Error running query');
    throw err;
  } finally {
    await client.end();
  }
}

/**
 * Read all notes.
 *
 * @returns {Promise} Promise representing an array of all note objects
 */
async function readAll() {
  const client = new Client({ connectionString });
  let res;
  try {
    await client.connect();
    res = await client.query('SELECT * FROM form');
    // console.info(res.rows);
  } catch (e) {
    console.error('Error selecting', e);
  }

  await client.end();
  return res.rows;
}

/**
 * Read a single note.
 *
 * @param {number} id - Id of note
 *
 * @returns {Promise} Promise representing the note object or null if not found
 */
async function readOne(id) {
  /* todo útfæra */
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
  /* todo útfæra */
}

/**
 * Delete a note asynchronously.
 *
 * @param {number} id - Id of note to delete
 *
 * @returns {Promise} Promise representing the boolean result of creating the note
 */
async function del(id) {
  /* todo útfæra */
}

module.exports = {
  create,
  readAll,
  readOne,
  update,
  del,
};
