
exports.up = async function (knex, Promise) {
	await knex.schema.createTable('tag', function (table) {
		table.increments('id').primary();
		table.string('name', 255).notNullable().unique();
		table.string('url', 255)
	});
	await knex.schema.createTable('game', function (table) {
		table.increments('id').primary();
		table.string('steamId', 255).notNullable().unique();
		table.string('name', 255).notNullable().unique();
		table.text('bio');
		table.text('url', 255);
		table.string('photo', 255);
		table.integer('likesNumber');
		table.integer('dislikesNumber');
		table.date('releaseDate');
		table.string('developer', 255);
		table.string('publisher', 255);
		table.float('meanRate');
		table.specificType('tags', 'integer[]');
	});
	await knex.schema.createTable('client', function (table) {
		table.increments('id').primary();
		table.string('name', 255).notNullable();
		table.string('email', 255).notNullable();
		table.string('password', 255).notNullable();
		table.string('photo', 255);
		table.text('bio');
		table.specificType('games', 'integer[]');
		table.specificType('ratings', 'integer[]');
	});
	await knex.schema.createTable('rating', function (table) {
		table.increments('id').primary();
		table.integer('gameId').references('game.id');
		table.integer('clientId').references('client.id');
		table.float('rate');
		table.integer('likeStatus');
	});
};

exports.down = async function (knex) {
	await knex.schema.dropTable('tag');
	await knex.schema.dropTable('rating');
	await knex.schema.dropTable('client');
	await knex.schema.dropTable('game');
};
