import React, { Component } from 'react'
import './App.css'
import HuelCalculator from './HuelCalculator'

class App extends Component {
    render() {
        return (
            <div className="App">

                <header>
                    <h1>How Much Huel?</h1>
                    <p>Easily find the right amounts of scoops, water and calories when using Huel (assumes vanilla).</p>
                </header>

                <HuelCalculator />

            </div>
        );
    }
}

export default App
