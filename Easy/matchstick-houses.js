// https://edabit.com/challenge/tYHkTdFrEmWfxpPKF

const matchHouse = function(step) {
	//Base Match House amount of Matches
	baseHouse = 6;
	//Each step needs to multiply base house x steps and substract the step number from the result

	if (step <= 1) {
		console.log(baseHouse);
	} else {
		result = baseHouse * step;
		if (result > 6) {
		}
	}
};

matchHouse(2);

//Solution

function matchHouses(step) {
	if (step) {
		return step * 5 + 1;
	}

	return 0;
}
