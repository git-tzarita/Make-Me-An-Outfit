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
      ON (c.type_id = t.id)`);
};

// Outfit.findAll = (user_id) => {
//  return db.many(`
//     SELECT
//       oi.*,
//       c.url,
//       c.name,
//       c.description
//     FROM outfits AS o
//     JOIN outfit_items oi
//       ON (o.id = oi.outfit_id)
//     JOIN clothing c
//       ON (oi.clothing_id = c.id)
//     JOIN types t
//       ON (c.type_id = t.id)
//     WHERE o.user_id = $1;
//  `, [outfits.user_id]);
// };

Outfit.findById = (id) => {
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
    WHERE o.id = $1
    `, [id]);
};

// Outfit.findbyId = (id) => {
//   return db.oneOrNone(`
//     SELECT
//       oi.*,
//       c.url,
//       c.name,
//       c.description
//     FROM outfits AS o
//     JOIN outfit_items oi
//       ON (o.id = oi.outfit_id)
//     JOIN clothing c
//       ON (oi.clothing_id = c.id)
//     JOIN types t
//       ON (c.type_id = t.id)
//     WHERE o.id = $1
//     [id]);
// };

Outfit.create = (outfits) => {
  db.tx = outfits => {
    const queries = [outfits.one('INSERT INTO outfits (user_id) VALUES ($1) RETURNING id', [id])
    ];
    for (let i=1; i<=2; i++) {
      queries.push(outfits.one('INSERT INTO outfit_items (outfit_id, clothing_id) VALUES ($2, $3)', [outfit_id, clothing_id]));
    }
    return outfits.batch[queries]
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

// Outfit.create = (outfits) => {
//   db.tx = outfits => {
//     const q1 = outfits.one('INSERT INTO outfits (user_id) VALUES ($1) RETURNING id', [id])
//     const q2 = outfits.one('INSERT INTO outfit_items (outfit_id) VALUES ($2)', [outfit_id])
//     const q3 = outfits.one('INSERT INTO outfit_items (outfit_id) VALUES ($3)', [outfit_id])
//     const q4 = outfits.one('INSERT INTO outfit_items (clothing_id) VALUES ($4)', [clothing_id])
//     const q5 = outfits.one('INSERT INTO outfit_items (clothing_id) VALUES ($5)', [clothing_id])

//     return outfits.batch[q1, q2, q3, q4, q5];
// }
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Outfit.create = outfits => {
//   console.log('I am here')
//   return db.one(`
//     INSERT INTO outfits
//       (user_id)
//     VALUES ($1)
//     RETURNING id`,
//     [id]
//     )
//   .then((id) => {
//     console.log(id);
//     return db.one(`
//       INSERT INTO outfit_items
//       (outfit_id)
//       VALUES ($2)`,
//     )}
//     )
//   .then((outfits) => {
//     return db.one(`
//       INSERT INTO outfit_items
//       (clothing_id)
//       VALUES ($3)`,
//     )
//   })
// }


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

Outfit.delete = (id) => {
  return db.none(`
    DELETE FROM outfits AS o
    JOIN outfit_items oi
      ON (o.id = oi.outfit_id)
    JOIN clothing c
      ON (oi.clothing_id = c.id)
    JOIN types t
      ON (c.type_id = t.id)
    WHERE id = $1;
 `, [id])
};


module.exports = Outfit;
