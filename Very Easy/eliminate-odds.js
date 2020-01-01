const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

const noOdds = (arr) => {
	result = [];
	arr.forEach((element) => {
		if (element % 2 === 0) {
			result.push(element);
		}
	});
	return result;
};

noOdds(numbers);


// Shorter solution:

function noOdds(arr) {
    return arr.filter(a => !(a % 2));
  }