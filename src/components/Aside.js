import React from 'react';
import '../styles/Aside.css';
import closeIcon from '../assets/shared/icon-close.svg';
import { Link } from 'react-router-dom';

const Aside = ({ hidden, onCloseClick }) => {
  return (
    <aside className={`aside ${hidden ? 'hide' : ''}`}>
      <div className="close-div">
        <img
          onClick={() => onCloseClick(!hidden)}
          src={closeIcon}
          className="close-icon"
          alt="close"
        />
      </div>
      <ul className="nav">
        <li className="links">
          <Link to="/">
            <span>00</span> Home
          </Link>
        </li>
        <li className="links">
          <Link to="/destination">
            <span>01</span> Destination
          </Link>
        </li>
        <li className="links">
          <Link to="/crew">
            <span>02</span> Crew
          </Link>
        </li>
        <li className="links">
          <Link to="/technologies">
            <span>03</span> Technology
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
