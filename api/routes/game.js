var express = require('express');
var router = express.Router();
const db = require("../db");

router.get('/', async function (req, res, next) {
	try {
		const data = await db('game');
		res.json({ game: data, length: data.length });
	} catch (err) {
		console.log(err.message);
		res.status(400).send({ error: err.message });
	}
});

router.get('/:id', async function (req, res, next) {
	try {
		const data = await db('game').where({ id: req.params.id });
		res.json({ game: data, length: data.length });
	} catch (err) {
		console.log(err.message);
		res.status(400).send({ error: err.message });
	}
});

router.get('/steam/:steamId', async function (req, res, next) {
	try {
		const data = await db('game').where({ steamId: req.params.steamId });
		res.json({ game: data, length: data.length });
	} catch (err) {
		console.log(err.message);
		res.status(400).send({ error: err.message });
	}
});

router.get('/name/:name', async function (req, res, next) {
	try {
		const data = await db('game').where({ name: req.params.name });
		res.json({ game: data, length: data.length });
	} catch (err) {
		console.log(err.message);
		res.status(400).send({ error: err.message });
	}
});

const formatDate = (date) => {
	if (typeof date.getMonth !== 'function')
		date = new Date();
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2)
		month = '0' + month;
	if (day.length < 2)
		day = '0' + day;

	return [year, month, day].join('-');
}

router.put("/", async function (req, res, next) {
	try {
		const body = req.body;
		if (!body.gameId || !body.userId) throw new Error("gameId or userId not found");
		const user = await db('client').where({ id: body.userId });
		const userGames = user[0].games

		if(userGames.includes(body.gameId))
			throw new Error("User already has this game");
			
		newGames = [...userGames, body.gameId];
		
		const data = await db("client").where({ id: body.userId }).update({
			games: newGames,
			bio: body.bio,
			photo: body.photo,
		});
		res.json({ client: data });
	} catch (err) {
		console.log(err.message);
		res.status(400).send({ error: err.message });
	}
});

router.post('/', async function (req, res, next) {
	try {
		const body = req.body;
		const developers = body.addData.developers.map(b => b.name);
		const publishers = body.addData.publishers.map(b => b.name);
		const date = formatDate(body.addData.releaseDate);
		const bodyTags = body.addData.tags;
		const newTags = [];
		const tagsNames = [];
		const game = await db('game').where({ name: body.name });
		if (!game) {
			const dbTags = await db.select('name').from('tag');
			await db.transaction(async trx => {
				bodyTags.forEach((tag) => {
					if (dbTags.find(t => t.name === tag.name))
						tagsNames.push(tag.name);
					else
						newTags.push(tag);
				});
				if (newTags.length > 0) {
					const insertNames = await trx('tag').insert(newTags, ['name']);
					const newNames = insertNames.map(name => name.name);
					tagsNames.push(...newNames);
				}
				const insertBody = {
					name: body.name,
					url: body.url,
					steamId: body.id,
					bio: body.addData.bio,
					photo: body.addData.img,
					developer: developers,
					publisher: publishers,
					likesNumber: 0,
					dislikesNumber: 0,
					meanRate: 0,
					tags: tagsNames
				};
				const insert = await trx('game').insert(insertBody);
				res.status(200).send({ insert: insert });
			});
		}
		else {
			res.status(400).send({ message: `Game ${body.name} already exists` });
		}
	} catch (err) {
		res.status(400).send({ error: err.message });
	}
});

module.exports = router;
