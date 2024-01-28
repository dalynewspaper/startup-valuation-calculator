import React from 'react';
import { Helmet } from 'react-helmet';
import ValuationCalculator from './ValuationCalculator';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AngelInvestorCalculator from './AngelInvestorCalculator';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Valuation Calculator for Startups</title>
        <meta name="description" content="A user-friendly tool to estimate the valuation of early-stage startups." />
        <meta name="keywords" content="startup, valuation, finance, investment, seed funding, pre-seed, calculator" />
      </Helmet>
      <header className="App-header">
        <h1>Welcome to the startup fundraising valuation calculator</h1>
        <p>This tool helps early-stage startups estimate their valuation based on various financial inputs.</p>
        <ValuationCalculator />
        <AngelInvestorCalculator />
      </header>
    </div>
  );
}

export default App;
