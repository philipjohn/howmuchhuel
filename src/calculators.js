export const calcFromHuelGrams = number => { return {
	huelGrams: number,
	huelScoops: (number / 38).toFixed(2),
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
	huelScoops: (number / 5 / 38).toFixed(2),
	waterMl: number,
	calories: (number / 5 / 38) * 152
}};

export const calcFromCalories = number => { return {
	huelGrams: number / 4,
	huelScoops: (number / 4 / 38).toFixed(2),
	waterMl: (number / 4) * 5,
	calories: number
}};
