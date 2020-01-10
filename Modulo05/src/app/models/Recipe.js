const { date } = require("../../lib/utils");

const db = require("../../config/db");

module.exports = {
  all(callback) {
    db.query(`
      SELECT recipes.*, chefs.name AS chef_name
      FROM recipes
      LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
      `, function(err, results) {
      if (err) throw `Database error! ${err}`;

      callback(results.rows);
    });
  },
  create(data, callback) {
    const query = `
      INSERT INTO recipes (
        image,
        title,
        ingredients,
        preparation,
        information,
        created_at,
        chef_id
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id
  `;

    const values = [
      data.image,
      data.title,
      Array(data.ingredients),
      Array(data.preparation),
      data.information,
      date(Date.now()).iso,
      data.author
    ];

    db.query(query, values, function(err, results) {
      if (err) throw `Database error! ${err}`;

      callback(results.rows[0]);
    });
  },
  find(id, callback) {
    db.query(
      `SELECT * 
       FROM recipes 
       WHERE id = $1`,
      [id],
      function(err, results) {
        if (err) throw `Database error! ${err}`;

        let recipe = results.rows[0];
        recipe.ingredients = String(recipe.ingredients).split(",");
        recipe.preparation = String(recipe.preparation).split(",");

        callback(recipe);
      }
    );
  },
  findByChef(id, callback) {
    db.query(
      `SELECT * 
       FROM recipes 
       WHERE chef_id = $1
       ORDER BY title ASC`,
      [id],
      function(err, results) {
        if (err) throw `Database error! ${err}`;

        callback(results.rows);
      }
    );
  },
  update(data, callback) {
    const query = `
      UPDATE recipes SET
        image=($1),
        title=($2),
        ingredients=($3),
        preparation=($4),
        information=($5),
        chef_id=($6)
      WHERE id = $7
    `;

    const values = [
      data.image,
      data.title,
      Array(data.ingredients),
      Array(data.preparation),
      data.information,
      data.author,
      data.id
    ];

    db.query(query, values, function(err, results) {
      if (err) throw `Database error! ${err}`;

      callback();
    });
  },
  delete(id, callback) {
    db.query(
      `DELETE FROM recipes
      WHERE id = $1`,
      [id],
      function(err, results) {
        if (err) throw `Database error! ${err}`;

        return callback();
      }
    );
  },
  chefsSelectOptions(callback) {
    db.query(`SELECT name, id FROM chefs`, (err, results) => {
      if (err) throw `Database error! ${err}`;

      callback(results.rows);
    })
  }
};
