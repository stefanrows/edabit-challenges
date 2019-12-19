// Create a function that returns the product of all odd integers in an array.

const odds = [ 3, 4, 1, 1, 8 ];

// function oddProduct(arr) {
// 	return arr.filter((x) => x % 2 !== 0).reduce((a, b) => a * b);
// }

// //or

// function oddProduct(arr) {
// 	var sum = 1;
// 	for (i = 0; i < arr.length; i++) {
// 		if (arr[i] % 2 != 0) {
// 			sum = sum * arr[i];
// 		}
// 	}
// 	return sum;
// }

const oddProduct = (arr) => {
	arr.forEach((element) => {
		if (element % 2 === 0) {
			console.log(element);
		}
	});
};

oddProduct(odds);
