//Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

function footballPoints(wins, draws, losses) {
	let winsPoints = wins * 3;
	let drawsPoints = draws;
	let points = winsPoints + drawsPoints;
	return points;
}
