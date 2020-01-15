function sortDescending(num) {
	let numArray = String(num).split('').map(Number);
	let sortedArray = numArray.sort(function(a, b) {
		return b - a;
	});
	let final = parseInt(sortedArray.join(''), 10);

	return final;
	//testing
}

sortDescending(53121);
