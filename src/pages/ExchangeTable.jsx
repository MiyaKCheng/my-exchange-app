import React from 'react';
import RateTable from '../components/RateTable';

const ExchangeTable = () => {
    return (
        <div>
            <h2>Exchange Rates Table</h2>
            <RateTable base="JPY" target="EUR" />
            <RateTable base="JPY" target="USD" />
            <RateTable base="JPY" target="GBP" />
            <RateTable base="JPY" target="CAD" />
            <RateTable base="JPY" target="TWD" />
            <RateTable base="JPY" target="AUD" />
        </div>
    );
};

export default ExchangeTable;
