import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ValuationCalculator from './ValuationCalculator';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Ensure this is imported if you have additional styles

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <Helmet>
        <title>Valuation Calculator for Startups</title>
        <meta name="description" content="A user-friendly tool to estimate the valuation of early-stage startups." />
        <meta name="keywords" content="startup, valuation, finance, investment, seed funding, pre-seed, calculator" />
        {/* Other relevant meta tags */}
      </Helmet>
      <header className="App-header">
        <h1>Welcome to the startup fundraising valuation calculator</h1>
        <p>This tool helps early-stage startups estimate their valuation based on various financial inputs.</p>

        <ValuationCalculator />
      </header>
      <div className="theme-switcher">
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default App;
