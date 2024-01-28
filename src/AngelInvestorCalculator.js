import React, { useState } from 'react';

function AngelInvestorCalculator() {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [currentValuation, setCurrentValuation] = useState('');
  const [futureValuation, setFutureValuation] = useState('');
  const [potentialReturn, setPotentialReturn] = useState('');

  const formatCurrency = (value) => {
    const numberValue = parseFloat(value.replace(/,/g, ''));
    return isNaN(numberValue) ? '' : numberValue.toLocaleString('en-US');
  };

  const handleBlur = (value, setter) => {
    const formattedValue = formatCurrency(value);
    setter(formattedValue);
  };

  const unformatCurrency = (value) => {
    return value.replace(/,/g, '');
  };

  const calculateReturn = () => {
    const investment = parseFloat(unformatCurrency(investmentAmount));
    const currentVal = parseFloat(unformatCurrency(currentValuation));
    const futureVal = parseFloat(unformatCurrency(futureValuation));

    if (investment > 0 && currentVal > 0 && futureVal > 0) {
      const ownershipPercentage = investment / currentVal;
      const futureValue = ownershipPercentage * futureVal;
      const formattedFutureValue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(futureValue);
      setPotentialReturn(formattedFutureValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateReturn();
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Angel Investor Calculator</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="investmentAmount" className="form-label">Investment Amount ($):</label>
              <input
                type="text"
                className="form-control"
                id="investmentAmount"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(e.target.value)}
                onBlur={() => handleBlur(investmentAmount, setInvestmentAmount)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="currentValuation" className="form-label">Current Company Valuation ($):</label>
              <input
                type="text"
                className="form-control"
                id="currentValuation"
                value={currentValuation}
                onChange={(e) => setCurrentValuation(e.target.value)}
                onBlur={() => handleBlur(currentValuation, setCurrentValuation)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="futureValuation" className="form-label">Future Company Valuation ($):</label>
              <input
                type="text"
                className="form-control"
                id="futureValuation"
                value={futureValuation}
                onChange={(e) => setFutureValuation(e.target.value)}
                onBlur={() => handleBlur(futureValuation, setFutureValuation)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Calculate</button>
          </form>
          {potentialReturn && (
            <div className="alert alert-success mt-3">
              <p>Potential Future Value of Investment: {potentialReturn}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AngelInvestorCalculator;
