function charCount(myChar, str) {
	return [ ...str ].filter((x) => x === myChar).length;
}

console.log(charCount('a', 'Balsam heals'));
