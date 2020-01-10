const { Pool } = require("pg");

module.exports = new Pool({
  user: "rayzyphs",
  password: "bruno",
  host: "localhost",
  port: 5432,
  database: "gymmanager"
});
