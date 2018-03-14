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

INSERT INTO users (username, password, salt) VALUES('admin', '$2a$11$zbNE18do5/UyiP1dnV2JDuOC9RHQvpSI/589vntikTiOIhr6YxF6O', 123 );