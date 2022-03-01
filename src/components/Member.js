import React from 'react';
import '../styles/Member.css';

const Member = ({ member }) => {
  const imgSrc = member.images.png.slice(9);
  return (
    <div className="member">
      {window.innerWidth < 992 ? (
        <div className="pagination-container"></div>
      ) : null}

      <div className="img-container">
        <img src={require(`../assets${imgSrc}`)} alt="member.name" />
      </div>

      <div className="text-container">
        <h4 className="h4">{member.role}</h4>
        <h3 className="h3">{member.name}</h3>
        <p>{member.bio}</p>
        {window.innerWidth >= 992 ? (
          <div className="pagination-container"></div>
        ) : null}
      </div>
    </div>
  );
};

export default Member;
