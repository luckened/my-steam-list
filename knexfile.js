// Update with your config settings.

module.exports = {
    // development: {
    //     client: "pg",
    //     connection: {
    //         host: "127.0.0.1",
    //         user: "[db_username]",
    //         password: "[db_password]",
    //         database: "[db_name]",
    //         charset: "utf8",
    //     },
    //     migrations: {
    //         directory: __dirname + "/knex/migrations",
    //     },
    //     seeds: {
    //         directory: __dirname + "/knex/seeds",
    //     },
    // },
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
