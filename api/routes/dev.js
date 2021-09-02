var express = require('express');
var router = express.Router();
const db = require("../db");

// Clear Tag and Game tables
router.post('/clear', async function (req, res, next) {
	try {
		const deleteTagReturn = await db.raw("DELETE FROM tag");
		const deleteGameReturn = await db.raw("DELETE FROM game");
		res.json([deleteTagReturn, deleteGameReturn]);
	} catch (err) {
		console.log(err.message);
		res.status(400).send({ error: err.message });
	}
});

module.exports = router;