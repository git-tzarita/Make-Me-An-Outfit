const db = require('../db/config');
const pgp = require('pg-promise')();

const Outfit = {};

Outfit.findAll = (user_id) => {
 return db.many(`
    SELECT
      oi.*,
      c.url,
      c.name,
      c.description
    FROM outfits AS o
    JOIN outfit_items oi
      ON (o.id = oi.outfit_id)
    JOIN clothing c
      ON (oi.clothing_id = c.id)
    JOIN types t
      ON (c.type_id = t.id)
    WHERE outfits.user_id = $1;
 `, [outfits.user_id]);
};

Outfit.findbyId = (id) => {
  return db.oneOrNone(`
    SELECT
      oi.*,
      c.url,
      c.name,
      c.description
    FROM outfits AS o
    JOIN outfit_items oi
      ON (o.id = oi.outfit_id)
    JOIN clothing c
      ON (oi.clothing_id = c.id)
    JOIN types t
      ON (c.type_id = t.id)
    WHERE outfits.user_id = $1
      AND o.id = $2
    `, [id]);
};

Outfit.upload = (outfits) => {
  return db.one(`
    INSERT INTO clothing
      (url, name, description, type_id, user_id)
    VALUES ($1, $2, $3, $4, $5)`,
    [clothing.url, clothing.name, clothing.description, clothing.type_id, clothing.user_id]
    )
}

// HOW DO I STORE THIS TO OUTFITS AND USER
Outfit.create = outfits => {
  console.log('I am here')
  return db.one(`
    INSERT INTO outfits
      (user_id)
    VALUES ($1)
    RETURNING id`,
    [id]
    )
  .then((id) => {
    console.log(id);
    return db.one(`
      INSERT INTO outfit_items
      (outfit_id)
      VALUES ($2)`,
    )}
    )
  .then((outfits) => {
    return db.one(`
      INSERT INTO outfit_items
      (clothing_id)
      VALUES ($3)`,
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
