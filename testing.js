const jeopardyWinnings = {
	regularPlay: 319281,
	watsonChallenge: 192191,
	tournamentOfChampions: 19281,
	battleOfTheDecades: 50000
};

for (let prop in jeopardyWinnings) {
	console.log(prop);
	console.log(jeopardyWinnings[prop]);
}
