function reverse(str) {
	strArray = str.split('');
	reversedArray = strArray.reverse();
	console.log(reversedArray.join(''));
}

reverse('hello');
