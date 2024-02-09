// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Exchange from './pages/Exchange.jsx';
import ExchangeTable from './pages/ExchangeTable.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/exchange-table" element={<ExchangeTable />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
