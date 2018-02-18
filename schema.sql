CREATE TABLE notes (
  id serial primary key,
  datetime timestamp with time zone NOT NULL,
  title character varying(255) NOT NULL,
  text text NOT NULL
);
