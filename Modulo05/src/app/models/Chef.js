const { date } = require("../../lib/utils");

const db = require("../../config/db");

module.exports = {
  all(callback) {
    db.query(`SELECT * FROM chefs`, function(err, results) {
      if (err) throw `Database error! ${err}`;

      callback(results.rows);
    });
  },
  create(data, callback) {
    const query = `
      INSERT INTO chefs (
        avatar_url,
        name,
        created_at	
      ) VALUES ($1, $2, $3)
      RETURNING id
  `;

    const values = [
      data.avatar_url,
      data.name,
      date(Date.now()).iso
    ];

    db.query(query, values, function(err, results) {
      if (err) throw `Database error! ${err}`;

      callback(results.rows[0]);
    });
  },
  find(id, callback) {
    db.query(
      `SELECT * 
       FROM chefs 
       WHERE id = $1`,
      [id],
      function(err, results) {
        if (err) throw `Database error! ${err}`;

        callback(results.rows[0]);
      }
    );
  },
  update(data, callback) {
    const query = `
      UPDATE chefs SET
        avatar_url=($1),
        name=($2) 
      WHERE id = $3
    `;

    const values = [
      data.avatar_url,
      data.name,
      data.id
    ];

    db.query(query, values, function(err, results) {
      if (err) throw `Database error! ${err}`;

      callback();
    });
  },
  delete(id, callback) {
    db.query(
      `DELETE FROM chefs
      WHERE id = $1`,
      [id],
      function(err, results) {
        if (err) throw `Database error! ${err}`;

        return callback();
      }
    );
  }
};
