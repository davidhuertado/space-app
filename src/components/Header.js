import React from 'react';
import '../styles/Header.css';
import logo from '../assets/shared/logo.svg';
import burguerIcon from '../assets/shared/icon-hamburger.svg';
import { Link } from 'react-router-dom';
// import closeIcon from '../assets/shared/icon-close.svg';

const Header = ({ setHiddenAside, hidden, pathname }) => {
  const menuLiArray = [
    { name: 'Home', route: '/' },
    { name: 'Destination', route: '/destination' },
    { name: 'Crew', route: '/crew' },
    { name: 'Technology', route: '/technologies' },
  ];

  const renderedMenuLi = menuLiArray.map(({ name, route }, index) => {
    return (
      <li className={route === pathname ? 'active' : ''} key={route}>
        <Link to={route}>
          <span className="hide-mobile d-desktop">{'0' + index}</span> {name}
        </Link>
      </li>
    );
  });

  return (
    <header className="header">
      <Link to="/">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>
      </Link>
      <span className="hide-mobile line"></span>
      <div className="burguer-container hide-tablet">
        <img
          onClick={() => setHiddenAside(!hidden)}
          className="burguer"
          src={burguerIcon}
          alt="menu"
        />
      </div>
      <div className="hide-mobile menu-tablet">
        <ul>{renderedMenuLi}</ul>
      </div>
    </header>
  );
};

export default Header;
