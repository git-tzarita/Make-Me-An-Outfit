const db = require('../db/config');
const pgp = require('pg-promise')();

const Outfit = {};

Outfit.findAll = () => {
  return db.query(`
    SELECT tops.top_url, bottoms.bottom_url
    FROM tops INNER JOIN outfits
    ON tops.id = outfits.topsids
    INNER JOIN bottoms
    ON bottoms.id = outfits.bottomsids;
    `);
};

//FIND BY USER:
// Outfit.findAll = () => {
//   return db.query(`
// SELECT tops.top_url, bottoms.bottom_url
// FROM tops INNER JOIN outfits
// ON tops.id = outfits.topsids
// INNER JOIN bottoms
// ON bottoms.id = outfits.bottomsids
// INNER JOIN users
// ON users.id = outfits.user_id
// WHERE users.id = $1
//     `);
// };


Outfit.findbyId = (id) => {
  return db.oneOrNone(`
    SELECT tops.top_url, bottoms.bottom_url
    FROM tops INNER JOIN outfits
    ON tops.id = outfits.topsids
    INNER JOIN bottoms
    ON bottoms.id = outfits.bottomsids
    INNER JOIN users
    ON users.id = outfits.user_id
    WHERE outfits.id = $1
    `, [id]);
};

// FIND BY USER ID
// Outfit.findbyId = (id) => {
//   return db.oneOrNone(`
//     SELECT tops.top_url, bottoms.bottom_url
//     FROM tops INNER JOIN outfits
//     ON tops.id = outfits.topsids
//     INNER JOIN bottoms
//     ON bottoms.id = outfits.bottomsids
//     INNER JOIN users
//     ON users.id = outfits.user_id
//     WHERE outfits.id = $1
//     AND users.id = $2
//     `, [id]);
// };

// HOW DO I STORE THIS TO OUTFITS AND USER
Outfit.create = outfits => {
  return db.one(`
    INSERT INTO tops
    (top_url)
    VALUES ($1)
    RETURNING tops.id`,
    [outfits.top_url]
    )
  .then(() => {
    console.log(id);
    return db.one(`
      INSERT INTO bottoms
      (bottom_url)
      VALUES ($2)
      RETURNING bottoms.id`,
      [outfits.bottom_url]
    )}
    )
  .then(() => {
    return db.one(`
      INSERT INTO outfits
      (topsids, bottomsids)
      VALUES (tops.id, bottoms.id)`,
      [outfits.topsids, outfits.bottomsids]
    )
  })
}


// Outfit.create = outfits => {
//   return db.one(`
//     INSERT INTO tops
//     (top_url)
//     VALUES ($1)
//     RETURNING id`,
//     [outfits.top_url]
//     )
//   .then(id => {
//     console.log(id);
//     return db.one(`
//       INSERT INTO bottoms
//       (id, bottom_url)
//       VALUES ($1, $2)
//       RETURNING id`,
//       [id, outfits.bottom_url]
//     )}
//   .then(id => {
//     return db.one(`
//       INSERT INTO outfits
//       (id, topsids, bottomsids, user_id)
//       VALUES ($1, $2, $3, $4)`,
//       [id, outfits.topsids, outfits.bottomsids, outfits.user_id]
//     )
//     })
//   })
// };

// HOW DO I STORE THIS TO USER
Outfit.update = (outfits, id) => {
  return db.one(
    `
    UPDATE tops SET
    top_url = $1
    WHERE tops.id = $2
    RETURNING *`,
    [outfits.top_url, tops.id]
    )
  .then((outfits, id) => {
    return db.one(
    `
    UPDATE bottoms SET
    bottom_url = $3
    WHERE bottoms.id = $4
    RETURNING *`,
    [outfits.bottom_url, bottoms.id]
    )})
  .then((outfits, id) => {
    return db.one(
    `
    UPDATE outfits SET
    topsids = $2
    bottomsids = $4
    WHERE outfits.id = $5
    RETURNING *`,
    [outfits.topsids, outfits.bottomsids, outfits.id]
    )
  });
};

// Outfit.update = (outfits, id) => {
// return db.one(
//   `
//   UPDATE tops SET
//   top_url = $1
//   WHERE tops.id = $2
//   RETURNING *`,
//   [outfits.top_url, id]
//   )
// .then((outfits, id) => {
//   return db.one(
//   `
//   UPDATE bottoms SET
//   bottom_url = $3
//   WHERE id = $4
//   RETURNING *`,
//   [outfits.bottom_url, id]
//   )
// .then((outfits, id) => {
//   return db.one(
//   `
//   UPDATE outfits SET
//   topsIDS = $2
//   bottomsIDs = $4
//   WHERE id = $5
//   RETURNING *`,
//   [outfits.topsids, outfits.bottomsids, id]
//   )
// })
// })
// };

// HOW DO I STORE THIS TO USER
Outfit.delete = (id) => {
  return db.none(`
    DELETE FROM outfits
    WHERE id = $1
    `, [id])
  .then((id) => {
  return db.none(`
    DELETE FROM tops
    WHERE id = $1
    `, [id])
})
  .then((id) => {
  return db.none(`
    DELETE FROM bottoms
    WHERE id = $1
    `, [id])

  });
};


module.exports = Outfit;
