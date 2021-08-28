var express = require('express');
var router = express.Router();
const db = require("../db");

router.get('/', async function (req, res, next) {
	try {
		const data = await db('rating');
		res.json({ rating: data });
	} catch (err) {
		console.log(err.message);
		res.status(400).send({ error: err.message });
	}
});

router.get('/:id', async function (req, res, next) {
	try {
		const data = await db('rating').where({ id: req.params.id });
		res.json({ rating: data });
	} catch (err) {
		console.log(err.message);
		res.status(400).send({ error: err.message });
	}
});

router.get('/client/:id', async function (req, res, next) {
	try {
		const data = await db('rating').where({ clientId: req.params.id });
		res.json({ rating: data });
	} catch (err) {
		console.log(err.message);
		res.status(400).send({ error: err.message });
	}
});

router.get('/game/:id', async function (req, res, next) {
	try {
		const data = await db('rating').where({ gameId: req.params.id });
		res.json({ rating: data });
	} catch (err) {
		console.log(err.message);
		res.status(400).send({ error: err.message });
	}
});

module.exports = router;