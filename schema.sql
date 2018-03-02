CREATE TABLE quotes (
  id serial primary key,
  year timestamp with time zone NOT NULL,
  book character varying(255) NOT NULL,
  quote text NOT NULL
);
