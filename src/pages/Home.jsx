import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h2>Welcome to My Exchange App</h2>
      <p>This is the home page.</p>
      <Link to="/exchange">
        <button>Go to Exchange</button>
      </Link>
      <Link to="/exchange-table">
        <button>Check the Exchange Rate Table</button>
      </Link>
    </div>
  );
};

export default Home;
