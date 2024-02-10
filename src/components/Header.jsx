import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='header-container'>
      <div className='upper-header'>
        <Link to='/'>
          <img id='logo' src='/logo.png' alt='Logo' />
        </Link>
        <div className='links'>
          <Link to='/products'>Products</Link>
          <Link to='jewelry'>JEWELRY</Link>
          <Link to='men'>Men</Link>
          <Link to='women'>Women</Link>
          <Link to='cart'>
            <img id='shopping-cart-icon' src='/cart.svg' alt='Shopping Cart' />
          </Link>
        </div>
      </div>
      <div className='lower-header'></div>
    </div>
  );
};
