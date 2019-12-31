const numbers = [ 19, 5, 42, 2, 77 ];

const sumInt = function(arr) {
	resultOne = [];
	resultTwo = [];
	//Sum two lowest integers together

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === Math.min.apply(null, arr)) {
				resultOne.push(arr[i]);
				indexOne = arr[i];
			}
		}
		index = arr.indexOf(indexOne);
		arr.splice(index, 1);

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === Math.min.apply(null, arr)) {
				resultTwo.push(arr[i]);
			}
		}

		const endResult = [ ...resultOne, ...resultTwo ];
		const sumEndResult = endResult.reduce((x, y) => x + y);
		// return sum
		console.log(sumEndResult);
};

sumInt(numbers);


// Solution 

function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
  };