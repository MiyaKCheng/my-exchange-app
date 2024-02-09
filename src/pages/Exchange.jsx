import React, { useState } from 'react';
import ExchangeRate from '../components/ExchangeRate.jsx';
import './Exchange.css';

const Exchange = () => {
  const [baseCurrency, setBaseCurrency] = useState('JPY');
  const [targetCurrency, setTargetCurrency] = useState('USD');
  const [amount, setAmount] = useState(1); // Default is 1

  return (
    <div className="exchange-container">
      <h2 className="exchange-heading">Exchange Page</h2>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Base Currency:</label>
        <input
          type="text"
          value={baseCurrency}
          onChange={(e) => setBaseCurrency(e.target.value)}
        />
      </div>
      <div>
        <label>Target Currency:</label>
        <input
          type="text"
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
        />
      </div>
      <ExchangeRate base={baseCurrency} target={targetCurrency} amount={amount} />
    </div>
  );
};

export default Exchange;
