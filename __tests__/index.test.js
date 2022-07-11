import {
	calcFromHuelGrams,
	calcFromHuelScoops,
	calcFromWaterMl,
	calcFromCalories
} from "../src/calculators.js";

describe('Calculators calculate properly', () => {
	test( 'Gram calculator works well', () => {
		expect( calcFromHuelGrams( 100 ) ).toEqual( {
			huelGrams: 100,
			huelScoops: 2.63,
			waterMl: 500,
			calories: 400,
		} );
	} )

	test( 'Scoops calculator works well', () => {
		expect( calcFromHuelScoops( 3 ) ).toEqual( {
			huelGrams: 114,
			huelScoops: 3,
			waterMl: 570,
			calories: 456,
		} );
	} )

	test( 'Water calculator works well', () => {
		expect( calcFromWaterMl( 500 ) ).toEqual( {
			huelGrams: 100,
			huelScoops: 2.63,
			waterMl: 500,
			calories: 400,
		} );
	} )

	test( 'Calories calculator works well', () => {
		expect(calcFromCalories(400)).toEqual({
			huelGrams: 100,
			huelScoops: 2.63,
			waterMl: 500,
			calories: 400,
		});
	} )

} )