var express = require('express');
var router = express.Router();
const db = require("../db");

router.get('/', async function (req, res, next) {
	try {
		const data = await db('game');
		res.json({ game: data });
	} catch (err) {
		console.log(err.message);
		res.status(400).send({ error: err.message });
	}
});

router.get('/:id', async function (req, res, next) {
	try {
		const data = await db('game').where({ id: req.params.id });
		res.json({ game: data });
	} catch (err) {
		console.log(err.message);
		res.status(400).send({ error: err.message });
	}
});

router.get('/steam/:steamId', async function (req, res, next) {
	try {
		const data = await db('game').where({ steamId: req.params.steamId });
		res.json({ game: data });
	} catch (err) {
		console.log(err.message);
		res.status(400).send({ error: err.message });
	}
});

router.get('/name/:name', async function (req, res, next) {
	try {
		const data = await db('game').where({ name: req.params.name });
		res.json({ game: data });
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
		const tags = body.addData.tags;
		const tagsNames = [];
		const newTags = [];
		const dbTags = await db.select('name').from('tag');
		await db.transaction(async trx => {
			tags.forEach((tag) => {
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
			const insert = await trx('game').insert({
				name: body.name,
				url: body.url,
				steamId: body.id,
				bio: body.addData.bio,
				photo: body.url,
				// releaseDate: body.addData.releaseDate,
				developer: developers,
				publisher: publishers,
				likesNumber: 0,
				dislikesNumber: 0,
				meanRate: 0,
				tags: tagsNames
			});
			res.status(200).send({ insert: insert });
		});
	} catch (err) {
		console.log(err.message, steamId);
		res.status(400).send({ error: newTags });
	}
});

module.exports = router;
