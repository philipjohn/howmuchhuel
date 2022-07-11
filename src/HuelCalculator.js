import React from 'react'
import {
	calcFromHuelGrams,
	calcFromHuelScoops,
	calcFromWaterMl,
	calcFromCalories
} from './calculators'

function HuelCalculator( { attributes } ) {

	const [
		huelGrams,
		huelScoops,
		waterMl,
		calories,
		setAttributes
	] = attributes;

    return (
		<div className="HuelCalculator">
			<div className="huel-amount">
				<p>Huel: </p>
				<div className="huel-grams">
					<input
						type="number"
						id="huelGrams"
						value={ huelGrams }
						onChange={ e => setAttributes( calcFromHuelGrams( e.target.value ) ) }
					/>
					<label htmlFor="huelGrams">grams</label>
				</div>
				<div className="huel-scoops">
					<input
						type="number"
						id="huelScoops"
						value={ huelScoops }
						onChange={ e => setAttributes( calcFromHuelScoops( e.target.value ) ) }
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
						value={ waterMl }
						onChange={ e => setAttributes( calcFromWaterMl( e.target.value ) ) }
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
						value={ calories }
						onChange={ e => setAttributes( calcFromCalories( e.target.value ) ) }
					/>
					<label htmlFor="calories">calories</label>
				</div>
			</div>
		</div>
	);

}

export default HuelCalculator;