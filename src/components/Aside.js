import React from 'react';
import '../styles/Aside.css';
import closeIcon from '../assets/shared/icon-close.svg';

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
        <li>
          <span>00</span> Home
        </li>
        <li>
          <span>01</span> Destination
        </li>
        <li>
          <span>02</span> Crew
        </li>
        <li>
          <span>03</span> Technology
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
