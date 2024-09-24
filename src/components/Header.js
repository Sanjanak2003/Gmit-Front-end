import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Online Retail Store</h1>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
