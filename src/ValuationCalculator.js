import React, { useState } from 'react';

function ValuationCalculator() {
  const [amountRaised, setAmountRaised] = useState('');
  const [equityPercentage, setEquityPercentage] = useState('');
  const [postMoneyValuation, setPostMoneyValuation] = useState('');
  const [valuations, setValuations] = useState(null);
  const [mode, setMode] = useState('percentage'); // 'percentage' or 'valuation'

  const formatNumber = (value) => {
    const numberValue = parseFloat(value.replace(/,/g, ''));
    return isNaN(numberValue) ? '' : numberValue.toLocaleString('en-US');
  };

  const handleBlur = (value, setter) => {
    const formattedValue = formatNumber(value);
    setter(formattedValue);
  };

  const unformatNumber = (value) => {
    return value.replace(/,/g, '');
  };

  const calculateValuations = () => {
    const amount = parseFloat(unformatNumber(amountRaised));
    const equity = mode === 'percentage' ? parseFloat(equityPercentage) : parseFloat(unformatNumber(postMoneyValuation));

    if (amount > 0 && equity > 0) {
      if (mode === 'percentage') {
        const postValuation = amount / (equity / 100);
        const preValuation = postValuation - amount;
        setValuations({
          preMoney: formatNumber(preValuation.toFixed(2)),
          postMoney: formatNumber(postValuation.toFixed(2)),
          equityGiven: equityPercentage
        });
      } else {
        const postValuation = equity;
        const preValuation = postValuation - amount;
        const equityGiven = (amount / postValuation) * 100;
        setValuations({
          preMoney: formatNumber(preValuation.toFixed(2)),
          postMoney: formatNumber(postValuation.toFixed(2)),
          equityGiven: equityGiven.toFixed(2)
        });
      }
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
          <h2 className="card-title">Calculate Your Next Fundraising Round</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="amountRaised" className="form-label">Amount Being Raised ($):</label>
              <input
                type="text"
                className="form-control"
                id="amountRaised"
                value={amountRaised}
                onChange={(e) => setAmountRaised(e.target.value)}
                onBlur={() => handleBlur(amountRaised, setAmountRaised)}
              />
            </div>
            {mode === 'percentage' ? (
              <div className="mb-3">
                <label htmlFor="equityPercentage" className="form-label">Equity Percentage (%):</label>
                <input
                  type="text"
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
                  type="text"
                  className="form-control"
                  id="postMoneyValuation"
                  value={postMoneyValuation}
                  onChange={(e) => setPostMoneyValuation(e.target.value)}
                  onBlur={() => handleBlur(postMoneyValuation, setPostMoneyValuation)}
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
