import { calcFromHuelGrams } from "../src/calculators.js";

describe('Calculators calculate properly', () => {
	test( 'Gram calculator works well', () => {
		expect(calcFromHuelGrams(100)).toEqual({
			huelGrams: 100,
			huelScoops: 2.63,
			waterMl: 500,
			calories: 400,
		});
	} )
} )