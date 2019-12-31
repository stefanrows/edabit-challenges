const numbers = [ 2, 5, 15, 29, 31 ];

// function sumTwoSmallestNumbers(numbers) {
// 	numbers = numbers.sort(function(a, b) {
// 		return a - b;
// 	});
// 	console.log(numbers[0] + numbers[1]);
// }

numbers.sort();

console.log(numbers);

const array1 = [ 1, 30, 4, 21, 100000 ];
array1.sort(function(a, b) {
	return a - b;
});
console.log(array1);
