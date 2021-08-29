var express = require('express');
var router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
	try {
		const data = await db('tag');
		res.json({ tags: data });
	} catch (err) {
		console.log(err.message);
		res.status(400).send({ error: err.message });
	}
});

router.get("/:name", async (req, res) => {
	try {
		const { name } = req.params;
		const data = await db('tag').where({ name: name });
		res.json({ tags: data[0] });
	}
	catch (err) {
		console.log(err.message);
		res.status(400).send({ error: err.message });
	}
});

router.post("/", async (req, res) => {
	try {
		const { name, url } = req.body;
		const data = await db('tag').insert({ name, url }, 'name');
		res.json({ data });
	} catch (err) {
		console.log(err.message);
		res.status(404).send({ error: err.message });
	}
})

module.exports = router;