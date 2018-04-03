const { Client } = require('pg');
const bcrypt = require('bcrypt');

const connectionString = process.env.DATABASE_URL || 'postgres://postgres:123@localhost/hugbo';

async function saveToDb(data) {
  const client = new Client({ connectionString });

  await client.connect();

<<<<<<< HEAD
  const q = 'INSERT INTO quotes(book, quote, chapter, year) VALUES($1, $2, $3, $4 ) RETURNING *';
=======
  const q = 'INSERT INTO quotes(book, quote, chapter, year) VALUES($1, $2, $3, $4) RETURNING *';
>>>>>>> 124a6f032e54be343fd18a0c7447d094e3212685
  const values = [data.book, data.quote, data.chapter, data.year];
  try {
    const result = await client.query(q, values);

    const { rows } = result;
    return rows;
  } catch (err) {
    console.error('Error inserting data');
    throw err;
  } finally {
    await client.end();
  }
}

async function fetchData() {
  const client = new Client({ connectionString });
  await client.connect();

  try {
    const result = await client.query('SELECT * FROM quotes');

    const { rows } = result;
    return rows;
  } catch (err) {
    console.error('Error selecting form data');
    throw err;
  } finally {
    await client.end();
  }
}

async function runQuery(q) {
  const client = new Client({ connectionString });

  await client.connect();

  try {
    const result = await client.query(q);

    const { rows } = result;
    return rows;
  } catch (err) {
    console.error('Error running query');
    throw err;
  } finally {
    await client.end();
  }
}

async function query(q, values = []) {
  const client = new Client({ connectionString });
  await client.connect();

  let result;

  try {
    result = await client.query(q, values);
  } catch (err) {
    throw err;
  } finally {
    await client.end();
  }

  return result;
}

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
  saveToDb,
  fetchData,
  runQuery,
  comparePasswords,
  findByUsername,
  findById,
};
