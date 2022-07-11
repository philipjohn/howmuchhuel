import React, { useState } from 'react'
import {
	calcFromHuelGrams,
	calcFromHuelScoops,
	calcFromWaterMl,
	calcFromCalories
} from './calculators'

const HuelCalculator = () => {

	const [ values, setValues ] = useState( {
		huelGrams: 100,
		huelScoops: 2.63,
		waterMl: 500,
		calories: 400,
	} )

    return (
		<div className="HuelCalculator">
			<div className="huel-amount">
				<p>Huel: </p>
				<div className="huel-grams">
					<input
						type="number"
						id="huelGrams"
						value={ values.huelGrams }
						onChange={ e => setValues( calcFromHuelGrams( e.target.value ) ) }
					/>
					<label htmlFor="huelGrams">grams</label>
				</div>
				<div className="huel-scoops">
					<input
						type="number"
						id="huelScoops"
						value={ values.huelScoops }
						onChange={ e => setValues( calcFromHuelScoops( e.target.value ) ) }
					/>
					<label htmlFor="huelScoops">scoops</label>
				</div>
			</div>

			<div className="water-amount">
				<p>Water:</p>

				<div className="water-ml">
					<input
						type="number"
						id="waterMl"
						value={ values.waterMl }
						onChange={ e => setValues( calcFromWaterMl( e.target.value ) ) }
					/>
					<label htmlFor="waterMl">ml</label>
				</div>
			</div>

			<div className="calories-amount">
				<p>Calories:</p>

				<div className="calories">
					<input
						type="number"
						id="calories"
						value={ values.calories }
						onChange={ e => setValues( calcFromCalories( e.target.value ) ) }
					/>
					<label htmlFor="calories">calories</label>
				</div>
			</div>
		</div>
	);

}

export default HuelCalculator;