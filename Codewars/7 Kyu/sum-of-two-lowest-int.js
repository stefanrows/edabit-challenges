const numbers = [ 19, 5, 42, 2, 77 ];

const sumInt = function(arr) {
	result = [];
	//Sum two lowest integers together
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === Math.min.apply(null, arr)) {
			result.push(arr[i]);
		}
	}
	// return sum
	console.log(result);
};

sumInt(numbers);
