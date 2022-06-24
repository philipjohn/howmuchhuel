import React from 'react';
import ReactDOM from 'react-dom';
import HuelCalculator from './HuelCalculator'
import './index.css';

function App() {
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

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
