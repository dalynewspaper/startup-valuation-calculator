import React, { useState } from 'react';

function ValuationCalculator() {
  const [amountRaised, setAmountRaised] = useState('');
  const [equityPercentage, setEquityPercentage] = useState('');
  const [postMoneyValuation, setPostMoneyValuation] = useState('');
  const [valuations, setValuations] = useState(null);
  const [mode, setMode] = useState('percentage'); // 'percentage' or 'valuation'

  const calculateValuations = () => {
    if (mode === 'percentage') {
      const amount = parseFloat(amountRaised);
      const equity = parseFloat(equityPercentage);
      const postValuation = amount / (equity / 100);
      const preValuation = postValuation - amount;
      setValuations({
        preMoney: preValuation.toFixed(2),
        postMoney: postValuation.toFixed(2),
        equityGiven: equityPercentage
      });
    } else {
      const postValuation = parseFloat(postMoneyValuation);
      const amount = parseFloat(amountRaised);
      const equity = (amount / postValuation) * 100;
      const preValuation = postValuation - amount;
      setValuations({
        preMoney: preValuation.toFixed(2),
        postMoney: postValuation.toFixed(2),
        equityGiven: equity.toFixed(2)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateValuations();
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Startup Valuation Calculator</h2>
          <div className="mb-3">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="modeOptions"
                id="percentageMode"
                value="percentage"
                checked={mode === 'percentage'}
                onChange={() => setMode('percentage')}
              />
              <label className="form-check-label" htmlFor="percentageMode">
                Calculate by Percentage
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="modeOptions"
                id="valuationMode"
                value="valuation"
                checked={mode === 'valuation'}
                onChange={() => setMode('valuation')}
              />
              <label className="form-check-label" htmlFor="valuationMode">
                Calculate by Post-Money Valuation
              </label>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="amountRaised" className="form-label">Amount Being Raised ($):</label>
              <input
                type="number"
                className="form-control"
                id="amountRaised"
                value={amountRaised}
                onChange={(e) => setAmountRaised(e.target.value)}
              />
            </div>
            {mode === 'percentage' ? (
              <div className="mb-3">
                <label htmlFor="equityPercentage" className="form-label">Equity Percentage (%):</label>
                <input
                  type="number"
                  className="form-control"
                  id="equityPercentage"
                  value={equityPercentage}
                  onChange={(e) => setEquityPercentage(e.target.value)}
                />
              </div>
            ) : (
              <div className="mb-3">
                <label htmlFor="postMoneyValuation" className="form-label">Post-Money Valuation ($):</label>
                <input
                  type="number"
                  className="form-control"
                  id="postMoneyValuation"
                  value={postMoneyValuation}
                  onChange={(e) => setPostMoneyValuation(e.target.value)}
                />
              </div>
            )}
            <button type="submit" className="btn btn-primary">Calculate</button>
          </form>
          {valuations && (
            <div className="alert alert-success mt-3">
              <p>Pre-Money Valuation: ${valuations.preMoney}</p>
              <p>Post-Money Valuation: ${valuations.postMoney}</p>
              {mode === 'valuation' && <p>Equity Given Away: {valuations.equityGiven}%</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ValuationCalculator;
