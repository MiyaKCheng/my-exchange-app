import React, { useState, useEffect } from 'react';

const ExchangeRate = ({ base, target, amount }) => {
  const [rate, setRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${base}`)
      .then((response) => response.json())
      .then((data) => {
        const exchangeRate = data.rates[target];
        setRate(exchangeRate);
        setConvertedAmount(amount * exchangeRate);
      })
      .catch((error) => {
        console.error('Error fetching exchange rate:', error);
      });
  }, [base, target, amount]);

  return (
    <div>
      <p>結果: {amount} {base} = {convertedAmount} {target}</p>
      <p>現在の為替レート:  1 {base} は {rate} {target}</p>
    </div>
  );
};

export default ExchangeRate;
