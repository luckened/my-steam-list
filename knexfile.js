// Update with your config settings.
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
    development: {
        client: "pg",
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DATABASE,
            ssl: { rejectUnauthorized: false },
            charset: "utf8",
        },
        migrations: {
            directory: __dirname + "/knex/migrations",
        },
        seeds: {
            directory: __dirname + "/knex/seeds",
        },
    },
    production: {
        client: "pg",
        connection: process.env.DATABASE_URL,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
            directory: "./knex/migrations",
        },
    },
};
