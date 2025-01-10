import React from 'react';

const LocationPopup = ({ title, image }) => {
  return (
    <div className="location-popup">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default LocationPopup;