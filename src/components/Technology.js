import React from 'react';
import '../styles/Technology.css';

const Technology = ({ technology }) => {
  const imgSrcLandscape = technology.images.landscape.slice(9);
  const imgSrcPortrait = technology.images.portrait.slice(9);

  return (
    <div className="technology">
      <div className="img-container">
        {/* Conditional for rendering img */}
        {window.innerWidth < 992 ? (
          <img
            src={require(`../assets${imgSrcLandscape}`)}
            alt={technology.name}
          />
        ) : (
          <img
            src={require(`../assets${imgSrcPortrait}`)}
            alt={technology.name}
          />
        )}
        {window.innerWidth < 992 ? (
          <div className="pagination-container"></div>
        ) : null}
      </div>
      <div className="text-container">
        <h6 className="h6 sub2">The terminology ...</h6>

        <h3 className="h3">{technology.name}</h3>
        <p>{technology.description}</p>
      </div>
      {window.innerWidth >= 992 ? (
        <div className="pagination-container"></div>
      ) : null}
    </div>
  );
};

export default Technology;
