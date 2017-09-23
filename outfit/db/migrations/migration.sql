\c outfit_app

DROP DATABASE outfit_app;
CREATE DATABASE outfit_app;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(128),
  password VARCHAR(128)
);

CREATE TABLE types (
  id SERIAL PRIMARY KEY,
  name VARCHAR(64)
);

CREATE TABLE clothing (
  id SERIAL PRIMARY KEY,
  url TEXT NOT NULL,
  name VARCHAR(128),
  description TEXT,
  type_id INTEGER REFERENCES types,
  user_id INTEGER REFERENCES users
);

CREATE TABLE outfits (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  UNIQUE (id, user_id)
);

CREATE TABLE outfit_items (
  outfit_id INTEGER REFERENCES outfits ON DELETE CASCADE,
  clothing_id INTEGER REFERENCES clothing,
  PRIMARY KEY(outfit_id, clothing_id)
);
