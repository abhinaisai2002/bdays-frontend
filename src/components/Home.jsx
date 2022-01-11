/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Link to='/topcards'>
        <b>Top Cards</b>
      </Link>
      <Link to='/addcard'>
        <b>Add Card</b>
      </Link>
    </div>
  );
};

export default Home;
