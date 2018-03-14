DROP TABLE IF EXISTS quotes;
DROP TABLE IF EXISTS users;

CREATE TABLE quotes (
  id serial primary key,
  chapter character varying(225) NOT NULL,
  book character varying(255) NOT NULL,
  quote text NOT NULL
);

CREATE TABLE users (
  username VARCHAR PRIMARY KEY,
  password character varying(255) NOT NULL,
  salt VARCHAR NOT NULL
);

INSERT INTO users (username, password, salt) VALUES('admin', 123, 123 );