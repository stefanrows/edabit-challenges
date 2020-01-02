const str = [ 'Tomato', 'Potato', 'Pair' ];

const isFourLetters = function(arr) {
	result = [];

	arr.forEach((element) => {
		if (element.length === 4) {
			result.push(element);
		}
	});
	return result;
};

isFourLetters(str);

//Shorter solution from edabit

function isFourLetters(arr) {
	return arr.filter((x) => x.length === 4);
}
