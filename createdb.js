require('dotenv').config();

const fs = require('fs');
const util = require('util');

const { Client } = require('pg');

const connectionString =
  process.env.DATABASE_URL || 'postgres://postgres:1234@localhost/postgres';

const readFileAsync = util.promisify(fs.readFile);

const schemaFile = './schema.sql';

const query = async (q) => {
  const client = new Client({ connectionString });

  await client.connect();

  try {
    return client.query(q).rows;
  } catch (err) {
    console.error('Error running query');
    throw err;
  } finally {
    await client.end();
  }
};

const create = async () => {
  const data = await readFileAsync(schemaFile);
  await query(data.toString('utf-8'));

  console.info('Schema created successfully');
};

create().catch(err => console.error('Error creating schema', err));
