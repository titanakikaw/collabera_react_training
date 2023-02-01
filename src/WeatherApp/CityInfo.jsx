/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';

function CityInfo({ CityInfo }) {
  return (
    <div className="weatherInfo__cityInfo">
      <h1 className="text-xl weatherInfo__text">City Name: {CityInfo.Name}</h1>
      <p className="text-xl weatherInfo__text">Temperature: {CityInfo.temp}</p>
      <p className="text-xl weatherInfo__text">
        Temperature Type: {CityInfo.tempType}
      </p>
    </div>
  );
}
CityInfo.propTypes = {
  CityInfo: PropTypes.objectOf(
    PropTypes.exact({
      Name: PropTypes.string,
      tempType: PropTypes.string,
      temp: PropTypes.number,
    }),
  ).isRequired,
};

export default CityInfo;
