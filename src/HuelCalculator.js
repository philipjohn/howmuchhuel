import React, { Component } from 'react'

export default class HuelCalculator extends Component {

    constructor() {
        super()

        this.state = {
            huel_grams: 0,
            huel_scoops: 0,
            water_ml: 0,
            calories: 0,
        }

    }

    calculate( number, type ) {

        switch ( type ) {

            case "huel_grams":
                    this.setState( {
                        huel_grams: number,
                        huel_scoops: number / 38,
                        water_ml: number * 5,
                        calories: number * 4,
                    } )
                break

            case "huel_scoops":
                    this.setState( {
                        huel_grams: number * 38,
                        huel_scoops: number,
                        water_ml: ( number * 38 ) * 5,
                        calories: number * 206,
                    } )
                break

            case "water_ml":
                    this.setState( {
                        huel_grams: number / 5,
                        huel_scoops: ( number / 5 ) / 38,
                        water_ml: number,
                        calories: ( number / 5 ) * 206,
                    } )
                break

            case "calories":
                    this.setState( {
                        huel_grams: number / 4,
                        huel_scoops: ( number / 4 ) / 38,
                        water_ml: (  number / 4 ) * 5,
                        calories: number,
                    } )
                break

            default:
                null

        }

    }

    render() {

        return <div className="HuelCalculator">

            <div className="huel-amount">

                <p>Huel amount in: </p>
                <div className="huel-grams">
                    <input
                        type="text"
                        id="huel_grams"
                        value={ this.state.huel_grams }
                        onChange={ e => this.calculate( e.target.value, "huel_grams" ) } />
                    <label for="huel_grams">grams</label>
                </div>
                <div className="huel-scoops">
                    <input
                        type="text"
                        id="huel_scoops"
                        value={ this.state.huel_scoops }
                        onChange={ e => this.calculate( e.target.value, "huel_scoops" ) } />
                    <label for="huel_scoops">scoops</label>
                </div>

            </div>

            <div className="water-amount">

                <p>Water amount in:</p>

                <div className="water-ml">
                    <input
                        type="text"
                        id="water_ml"
                        value={ this.state.water_ml }
                        onChange={ e => this.calculate( e.target.value, "water_ml" ) } />
                    <label for="water_ml">ml</label>
                </div>

            </div>

            <div className="calories-amount">

                <p>Calories desired:</p>

                <div className="calories">
                    <input
                        type="text"
                        id="calories"
                        value={ this.state.calories }
                        onChange={ e => this.calculate( e.target.value, "calories" ) } />
                    <label for="calories">calories</label>
                </div>

            </div>

        </div>

    }

}
