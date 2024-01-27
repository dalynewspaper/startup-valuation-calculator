import React, { useState } from 'react';

function ValuationCalculator() {
  const [amountRaised, setAmountRaised] = useState('');
  const [equityPercentage, setEquityPercentage] = useState('');
  const [valuations, setValuations] = useState(null);

  const calculateValuations = () => {
    const amount = parseFloat(amountRaised);
    const equity = parseFloat(equityPercentage);
    const postMoneyValuation = amount / (equity / 100);
    const preMoneyValuation = postMoneyValuation - amount;
    setValuations({
      preMoney: preMoneyValuation.toFixed(2),
      postMoney: postMoneyValuation.toFixed(2)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateValuations();
  };

  return (
    <div>
      <h2>Startup Valuation Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Amount Being Raised ($):
            <input
              type="number"
              value={amountRaised}
              onChange={(e) => setAmountRaised(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Equity Percentage (%):
            <input
              type="number"
              value={equityPercentage}
              onChange={(e) => setEquityPercentage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Calculate</button>
      </form>
      {valuations && (
        <div>
          <p>Pre-Money Valuation: ${valuations.preMoney}</p>
          <p>Post-Money Valuation: ${valuations.postMoney}</p>
        </div>
      )}
    </div>
  );
}

export default ValuationCalculator;
