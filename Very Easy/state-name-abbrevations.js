let states = [ 'Arizona', 'CA', 'NY', 'Nevada' ];

const filterStateNames = (arr, condition) => {
	if (condition === 'abb') {
		return arr.filter((element) => element.length === 2);
	} else if (condition === 'full') {
		return arr.filter((element) => element.length > 2);
	}
};

filterStateNames(states, 'abb');

// Shorter Solution
function filterStateNames(arr, type) {
	return arr.filter((v) => (type === 'abb' ? v.length < 3 : v.length > 2));
}
