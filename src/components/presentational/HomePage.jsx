import React from 'react';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <div>
      Main HomePage
      <Link to="/about">Go to about Page</Link>
    </div>
  );
};

export default HomePage;
