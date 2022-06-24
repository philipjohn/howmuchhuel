import React, { useState } from 'react'

function HuelCalculator() {

    const { huelGrams, setHuelGrams } = useState(0);
    const { huelScoops, setHuelScoops } = useState(0);
    const { waterMl, setWaterMl } = useState(0);
    const { calories, setCalories } = useState(0);

    const calculate = ( number, type ) => {

        switch ( type ) {

            case "huelGrams":
                    setHuelGrams( number );
                    setHuelScoops( ( number / 38 ).toFixed( 2 ) );
                    setWaterMl( number * 5 );
                    setCalories( number * 4 );
                break

            case "huelScoops":
                    setHuelGrams( number * 38 );
                    setHuelScoops( number );
                    setWaterMl( ( number * 38 ) * 5 );
                    setCalories( number * 152 );
                break

            case "waterMl":
                    setHuelGrams( number / 5 );
                    setHuelScoops( ( ( number / 5 ) / 38 ).toFixed( 2 ) );
                    setWaterMl( number );
                    setCalories( ( ( number / 5 ) / 38 ) * 152 );
                break

            case "calories":
                    setHuelGrams( number / 4 );
                    setHuelScoops( ( ( number / 4 ) / 38 ).toFixed( 2 ) );
                    setWaterMl( (  number / 4 ) * 5 );
                    setCalories( number );
                break

            default:
                return

        }

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
                        onChange={ e => this.calculate( e.target.value, "huelGrams" ) } />
                    <label htmlFor="huelGrams">grams</label>
                </div>
                <div className="huel-scoops">
                    <input
                        type="number"
                        id="huelScoops"
                        value={ huelScoops }
                        onChange={ e => this.calculate( e.target.value, "huelScoops" ) } />
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
                        onChange={ e => this.calculate( e.target.value, "waterMl" ) } />
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
                        onChange={ e => this.calculate( e.target.value, "calories" ) } />
                    <label htmlFor="calories">calories</label>
                </div>

            </div>

        </div>
    )

}

export default HuelCalculator;