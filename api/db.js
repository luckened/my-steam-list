const dbEngine = process.env.DB_ENVIROMENT || "development";
const config = require("../knexfile")[dbEngine];

module.exports = require("knex")(config);
