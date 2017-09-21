DROP DATABASE makeoutfit_db;
CREATE DATABASE makeoutfit_db;
\c makeoutfit_db



DROP TABLE IF EXISTS tops;
DROP TABLE IF EXISTS bottoms;


CREATE TABLE IF NOT EXISTS tops(
  id BIGSERIAL PRIMARY KEY,
  top_url VARCHAR(255)

);


CREATE TABLE IF NOT EXISTS bottoms(
  id BIGSERIAL PRIMARY KEY,
  bottom_url VARCHAR(255)

);


create table users(
id BIGSERIAL PRIMARY key,
name VARCHAR(255),
password VARCHAR(255)
);


DROP TABLE outfits;
CREATE TABLE outfits(
  id BIGSERIAL PRIMARY KEY,
  topsIDs INTEGER REFERENCES tops(id),
  bottomsIDs INTEGER REFERENCES bottoms(id),
  user_id INTEGER REFERENCES users(id)
);

