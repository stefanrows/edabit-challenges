//Create a function that takes two arrays and insert the second array in the middle of the first array.

function tuckIn(arr1, arr2) {
	const final = arr1.splice(1, 0, ...arr2);
	return final;
}

console.log(tuckIn([ 1, 10 ], [ 4, 5, 6 ]));
