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

// wip
// router.post('/', async function (req, res, next) {
// 	try {
// 		// const data = await db('game').insert(req.body);
// 		const { game } = req.body;
// 		const { newName, newUrl } = game;
// 		const transaction = await db.getConnection();
// 		const [tags] = await db('tag');

// 		const tag = tags.find(tag => {
// 			tag.name === newName;
// 		});
// 		if(!tag){
// 			await db('tag').insert({ name: newName, url: newUrl });
			

// 		}
// 		// data.forEach(({tags})=>{

// 		// })

// 		// 
// 		res.json({ game: data });
// 	} catch (err) {
// 		console.log(err.message);
// 		res.status(400).send({ error: err.message });
// 	}
// })

module.exports = router;
