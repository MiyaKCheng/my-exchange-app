import React, { useState, useEffect } from 'react';

const RateTable = ({ base, target }) => {
    const [rate, setRate] = useState(null);

    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${base}`)
            .then((response) => response.json())
            .then((data) => {
                setRate(data.rates[target]);
            })
            .catch((error) => {
                console.error('Error fetching exchange rate:', error);
            });
    }, [base, target]);

    return (
        <div>
            <p>1 {base} = {rate} {target}</p>
        </div>
    );
};

export default RateTable;
