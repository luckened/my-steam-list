// import cheerio
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');

const steamStatsUrl = "https://store.steampowered.com/stats/"

let gameList = [];
let errorsLog = {
	firstStage: [],
	secondStage: []
};

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const formatString = (string) => {
	return String(string).replace(/[\n\t\r]/g, "");
};

let cookieText = `wants_mature_content=1; lastagecheckage=1-0-1932; birthtime=-1201895999;`

request(steamStatsUrl, (error, response, html) => {

	if (!error && response.statusCode == 200) {
		try {
			const $ = cheerio.load(html);
			const table = $('table');

			const tableRows = table.find('tr.player_count_row');

			tableRows.each((i, elem) => {
				const spans = $(elem).find('span.currentServers');
				const currentPlayers = spans.first().text();
				const maxPlayers = spans.last().text();
				const gameElement = $(elem).find('a');
				const name = gameElement.text();
				const url = gameElement.attr('href');
				const id = String(url).split('/')[4];
				gameList.push({ currentPlayers, maxPlayers, name, url, id });
			});
		} catch (err) {
			console.log(err);
			errorsLog.firstStage.push(err);
		}

		try {
			fs.writeFileSync('gameList_FirstStage.json', JSON.stringify(gameList));
		} catch (err) {
			errorsLog.firstStage.push('Erro salvando arquivo');
		}


		try {
			let gameData = [...gameList];
			gameList.some((game, index) => {
				request({url:game.url, headers:{Cookie: cookieText}}, (error, response, html) => {
					if (!error && response.statusCode == 200) {
						console.log(game.url);
						const $ = cheerio.load(html);
						const blockElement = $('div.block');
						const rightColumn = blockElement.find('div.rightcol');
						const img = rightColumn.find('img.game_header_image_full').attr('src');
						const description = formatString(rightColumn.find('div.game_description_snippet').text());
						const releaseDate = rightColumn.find('div.release_date').find('.date').text();
						const developers = $(rightColumn).find('div#developers_list').find('a').map((index, devElem) => {
							let url = formatString($(devElem).attr('href'));
							let name = formatString($(devElem).text());
							return { url, name }
						}).get();
						const publishers = rightColumn.find('div.dev_row').last().find('div.summary.column').find('a').map((index, pubElem) => {
							let url = formatString($(pubElem).attr('href'));
							let name = formatString($(pubElem).text());
							return { url, name }
						}).get();
						const tags = (rightColumn.find('div.glance_tags.popular_tags').find('a')).map((index, tagElem) => {
							let url = formatString($(tagElem).attr('href'));
							let name = formatString($(tagElem).text());
							return { url, name }
						}).get();

						const addData = {
							img, description, releaseDate, developers, publishers, tags
						};
						gameData[index].addData = addData;
					} else {
						errorsLog.secondStage.push(error);
					}
					try {
						fs.writeFileSync('gameList.json', JSON.stringify(gameData, null, 2));
					} catch (err) {
						console.log('Erro salvando arquivo');
						errorsLog.secondStage.push('Erro salvando arquivo');
					}

				});
				sleep(500);
			});

		} catch (err) {
			console.log(err);
			errorsLog.secondStage.push(err);
		}
		// use fs to sync save gameList to file
		fs.writeFileSync('errorsLog.json', JSON.stringify(errorsLog));

	}

});

