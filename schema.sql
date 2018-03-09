CREATE TABLE quotes (
  id serial primary key,
  year timestamp with time zone NOT NULL,
  book character varying(255) NOT NULL,
  quote text NOT NULL
);

CREATE TABLE users (
  username VARCHAR PRIMARY KEY,
  password PASSWORD,
)
