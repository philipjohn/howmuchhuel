export const calcFromHuelGrams = number => { return {
	huelGrams: number,
	huelScoops: toFixedNumber( number / 38, 2 ),
	waterMl: number * 5,
	calories: number * 4
} };

export const calcFromHuelScoops = number => { return {
	huelGrams: number * 38,
	huelScoops: number,
	waterMl: number * 38 * 5,
	calories: number * 152
}};

export const calcFromWaterMl = number => { return {
	huelGrams: number / 5,
	huelScoops: toFixedNumber( number / 5 / 38, 2 ),
	waterMl: number,
	calories: (number / 5 / 38) * 152
}};

export const calcFromCalories = number => { return {
	huelGrams: number / 4,
	huelScoops: toFixedNumber( number / 4 / 38, 2 ),
	waterMl: (number / 4) * 5,
	calories: number
}};

// Props to m93a at https://stackoverflow.com/a/29494612
const toFixedNumber = ( num, digits, base ) => {
	var pow = Math.pow(base || 10, digits);
	return Math.round(num * pow) / pow;
}