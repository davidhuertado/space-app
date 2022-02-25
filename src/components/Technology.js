import React from 'react';
import '../styles/Technology.css';

const Technology = ({ technology }) => {
  const imgSrc = technology.images.landscape.slice(9);
  return (
    <div className="technology">
      <div className="img-container">
        <img src={require(`../assets${imgSrc}`)} alt={technology.name} />
      </div>
      <h6 className="h6 sub2">The terminology</h6>

      <h3 className="h3">{technology.name}</h3>
      <p>{technology.description}</p>
    </div>
  );
};

export default Technology;
