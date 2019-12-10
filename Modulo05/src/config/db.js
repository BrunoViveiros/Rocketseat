const { Pool } = require("pg");

module.exports = new Pool({
  user: "rayzyphs",
  password: "Bruno-3720",
  host: "localhost",
  port: 5432,
  database: "gymmanager"
});
