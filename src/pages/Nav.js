import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="nav">
    <h1>Math Magicians</h1>
    <nav>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/calculator"><li>Calculator</li></Link>
        <Link to="/quote"><li>Quote</li></Link>
      </ul>
    </nav>
  </div>
);

export default Nav;
