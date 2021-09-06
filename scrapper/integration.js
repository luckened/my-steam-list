const fs = require('fs');
const request = require('request');
var gameList = JSON.parse(fs.readFileSync('gameList.json', 'utf8'));

const postGameUrl = "http://localhost:3001/game";
const postTagUrl = "http://localhost:3001/tag";
const failedGames = [];

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const createTagList = (gameList) => {
	let tags = {};
	gameList.forEach(game => {
		game.addData.tags.forEach(tag => {
			// tags.add(tag.name);
			if (!tags[tag.name]) {
				tags[tag.name] = tag.url;
			}
		});
	})
	return tags;
}

const postTagList = async (tagList) => {
	console.log(tagList);
	for (const [name,url] of Object.entries(tagList)) {
		try {
			await request.post({
				url: postTagUrl,
				body: { name, url },
				json: true
			}), (err, res, body) => {
				if (err || res.statusCode !== 200) {
					console.log(res.body);
				}
			}
		}
		catch (err) {
			console.log(err);
		}

	}
}

const postGameList = async (gameList) => {

	for (const game of gameList) {
		console.log("Posting " + game.name);
		try {
			await request.post({
				url: postGameUrl,
				body: game,
				json: true
			}, (err, res, body) => {
				if (err || res.statusCode !== 200) {
					failedGames.push(game.name);
					console.log(game.name);
					console.log(res.body);
					sleep(5000);
				}
			})
		} catch (err) {
			console.log(err);
		}

	}

};

postTagList(createTagList(gameList)).then(() => {
	postGameList(gameList).then(() => {
		console.log("Failed Games:", failedGames);
	});
});