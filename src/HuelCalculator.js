import React from 'react'

function HuelCalculator( { attributes } ) {

	const [ huelGrams, setHuelGrams ] = attributes;
	const [ huelScoops, setHuelScoops ] = attributes;
	const [ waterMl, setWaterMl ] = attributes;
	const [ calories, setCalories ] = attributes;

	const calcFromHuelGrams = number => {
		setHuelGrams(number);
		setHuelScoops((number / 38).toFixed(2));
		setWaterMl(number * 5);
		setCalories(number * 4);
	}

	const calcFromHuelScoops = number => {
		setHuelGrams(number * 38);
		setHuelScoops(number);
		setWaterMl(number * 38 * 5);
		setCalories(number * 152);
	}

	const calcFromWaterMl = number => {
		setHuelGrams(number / 5);
		setHuelScoops((number / 5 / 38).toFixed(2));
		setWaterMl(number);
		setCalories((number / 5 / 38) * 152);
	}

	const calcFromCalories = number => {
		setHuelGrams(number / 4);
		setHuelScoops((number / 4 / 38).toFixed(2));
		setWaterMl((number / 4) * 5);
		setCalories(number);
	}

    return (
		<div className="HuelCalculator">
			<div className="huel-amount">
				<p>Huel: </p>
				<div className="huel-grams">
					<input
						type="number"
						id="huelGrams"
						value={ huelGrams }
						onChange={ e => calcFromHuelGrams( e.target.value ) }
					/>
					<label htmlFor="huelGrams">grams</label>
				</div>
				<div className="huel-scoops">
					<input
						type="number"
						id="huelScoops"
						value={ huelScoops }
						onChange={ e => calcFromHuelScoops( e.target.value ) }
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
						onChange={ e => calcFromWaterMl( e.target.value ) }
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
						onChange={ e => calcFromCalories( e.target.value ) }
					/>
					<label htmlFor="calories">calories</label>
				</div>
			</div>
		</div>
	);

}

export default HuelCalculator;