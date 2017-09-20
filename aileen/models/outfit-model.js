const db = require('../db/config');
const pgp = require('pg-promise')();

const Outfit = {};

// THIS NEEDS TO CHANGE
// Outfit.findAll = () => {
//   return db.query(`
//     SELECT grams.id, photo, location, status, comments, type
//     FROM grams INNER JOIN phototypes
//     ON grams.type = phototypes.id
//     `);
// };

// THIS NEEDS TO CHANGE
// Outfit.findbyId = (id) => {
//   return db.oneOrNone(`
//     SELECT grams.id, photo, location, status, comments, type
//     FROM grams INNER JOIN phototypes
//     ON grams.type = phototypes.id
//     WHERE grams.id = $1
//     `, [id]);
// };

// THIS NEEDS TO CHANGE
// Outfit.create = outfits => {
//   grams.type = Number.parseInt(grams.type, 10)
//   console.log(grams.type);
//   return db.one(
//     `
//     INSERT INTO grams
//     (photo, location, status, comments, type)
//     VALUES ($1, $2, $3, $4, $5)
//     RETURNING *
//     `,
//     [grams.photo, grams.location, grams.status, grams.comments, grams.type]
//     );
// };

// THIS NEEDS TO CHANGE
// Outfit.update = (outfits, id) => {
//   grams.type = Number.parseInt(grams.type, 10)
//   console.log(grams, id);
//   return db.one(
//     `
//     UPDATE grams SET
//     photo = $1,
//     location = $2,
//     status = $3,
//     comments = $4,
//     type = $5
//     WHERE id = $6
//     RETURNING *
//     `, [grams.photo, grams.location, grams.status, grams.comments, grams.type, id]
//     );
// };

// THIS NEEDS TO CHANGE
// Outfit.delete = (id) => {
//   return db.none(`
//     DELETE FROM grams
//     WHERE id = $1
//     `, [id]);
// }


module.exports = Outfit;
