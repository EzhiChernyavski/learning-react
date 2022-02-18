import React from 'react';
import header from './Header.module.css';

const Header = () => {
  return (
    <header className={header.header}>
      <img src='https://cryptologos.cc/logos/uniswap-uni-logo.png'/>
    </header>
  )
}

export default Header;