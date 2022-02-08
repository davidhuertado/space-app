import React from 'react';
import '../styles/Header.css';
import logo from '../assets/shared/logo.svg';
import burguerIcon from '../assets/shared/icon-hamburger.svg';
// import closeIcon from '../assets/shared/icon-close.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="burguer-container">
        <img className="burguer" src={burguerIcon} alt="menu" />
      </div>
    </header>
  );
};

export default Header;
