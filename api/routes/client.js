var express = require('express');
var router = express.Router();
const db = require("../db");

router.get('/', async function (req, res, next) {
	try {
		const data = await db('client');
		res.json({ client: data });
	} catch (err) {
		console.log(err.message);
		res.status(400).send({ error: err.message });
	}
});

router.get('/:id', async function (req, res, next) {
	try {
		const data = await db('client').where({ id: req.params.id });
		res.json({ client: data });
	} catch (err) {
		console.log(err.message);
		res.status(400).send({ error: err.message });
	}
});

router.post('/', async function (req, res, next) {
	try {
		const body = req.body;
		body.games ? body.games : [];
		body.ratings ? body.ratings : [];
		const data = await db('client').insert(req.body);
		res.json({ client: data });
	} catch (err) {
		console.log(err.message);
		res.status(400).send({ error: err.message });
	}
})

module.exports = router;