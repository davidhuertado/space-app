import React from 'react';

const Planet = ({ planet }) => {
  const imgPath = planet.images.png;

  return (
    <div className="planet">
      <div className="img-container">
        <img
          src={require(`../assets/destination/image-${planet.name.toLowerCase()}.png`)}
          alt="moon"
        />
      </div>
      <div className="text-div">
        <div className="pagination-container"></div>
        <h2 className="h2">{planet.name}</h2>
        <p>{planet.description}</p>
        <hr className="hr" />
        <div className="time-destination-wrapper">
          <div className="distance">
            <h6 className="h6 sub2">Avg. distance</h6>
            <h6 className="h6 sub1">{planet.distance}</h6>
          </div>
          <div className="travel">
            {' '}
            <h6 className="h6 sub2">Est. travel time</h6>
            <h6 className="h6 sub1">{planet.travel}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planet;
