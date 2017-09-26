const db = require('../db/config');
const pgp = require('pg-promise')();

const Outfit = {};

Outfit.findAll = (user_id) => {
 return db.many(`
    SELECT
      oi.*,
      c.url,
      c.type_id,
      c.name,
      c.description
    FROM outfits AS o
    JOIN outfit_items oi
      ON (o.id = oi.outfit_id)
    JOIN clothing c
      ON (oi.clothing_id = c.id)
    JOIN types t
      ON (c.type_id = t.id)
      `);
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

// Outfit.findAll = () => {
//   return db.many(`SELECT * FROM clothing`);
// }


Outfit.findAllOutfits = (user_id) => {
 return db.many(`
    SELECT
      oi.*,
      c.url,
      c.type_id,
      c.name,
      c.description
    FROM outfits AS o
    JOIN outfit_items oi
      ON (o.id = oi.outfit_id)
    JOIN clothing c
      ON (oi.clothing_id = c.id)
    JOIN types t
      ON (c.type_id = t.id)
    WHERE o.id = oi.id
      `);
};

Outfit.findById = (id) => {
  return db.any(`
    SELECT
      oi.*,
      c.url,
      c.type_id,
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

Outfit.create = (userID, clothingIDs) => {
  // debugger;
  const insertOutfits = async () => {
    // get the new outfitID;
    // userID --> outfitID
    const outfitID = await db.one(`
      INSERT INTO outfits (user_id)
      VALUES ($1)
      RETURNING id
    `, userID);
    const dataMulti = clothingIDs.map((itemID) => {
      return {
        outfit_id: outfitID,
        clothing_id: itemID,
      };
    });
    const cs = new pgp.helpers.ColumnSet(['outfit_id', 'clothing_id'], {table:'outfit_items'})
    const temp = await pgp.helpers.insert(dataMulti, cs);
    return outfitID, itemID;
  };
  return insertOutfits();
  //return db.tx(insertOutfits)
}

Outfit.createClothing = (data) => {
  return db.one(`
    INSERT INTO clothing
      (url, type_id)
      VALUES ($1, $2)
      RETURNING id`,
      [data.url, data.type_id]
      )
}

Outfit.create = (userID, clothingIDs) => {
  // debugger;
  const insertOutfits = async () => {
    // get the new outfitID;
    // userID --> outfitID
    const outfitID = await db.one(`
      INSERT INTO outfits (user_id)
      VALUES ($1)
      RETURNING id
    `, userID);
    const dataMulti = clothingIDs.map((itemID) => {
      return {
        outfit_id: outfitID,
        clothing_id: itemID,
      };
    });
    const cs = new pgp.helpers.ColumnSet(['outfit_id', 'clothing_id'], {table:'outfit_items'})
    const temp = await pgp.helpers.insert(dataMulti, cs);
    return outfitID, itemID;
  };
  return insertOutfits();
  //return db.tx(insertOutfits)
}




  // db.tx = t => {
  //   const queries = [

  //     ];
  //   for (let i=1; i<=2; i++) {
  //     queries.push(
  //       outfits.one('INSERT INTO outfit_items (outfit_id, clothing_id) VALUES ($2, $3)', [outfit_id, clothing_id]));
  //   }
  //   return outfits.batch[queries]
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }


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

//for Auth only
Outfit.findByUserName= (userName) =>{
  return db.one(`
    SELECT * FROM users
    WHERE username = $1
    `, [userName]);
}


Outfit.createAUser = user => {
  return db.one(`
    INSERT INTO users
    (name, password)
    VALUES ($1, $2)
    RETURNING *
      `, [user.username, user.password]);
};

// HOW DO I STORE THIS TO USER
Outfit.update = (outfits, id) => {
  return db.one(
    `
    UPDATE outfit_items SET
    outfit_id = $1,
    clothing_id = $2
    RETURNING *
    `, outfit_items
    )
};

Outfit.delete = (id) => {
  return db.none(`
    DELETE
    FROM outfits
    WHERE id = $1;
 `, [id])
};


module.exports = Outfit;
