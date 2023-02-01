import React, { memo } from 'react';
import PropTypes from 'prop-types';

function CityClearBtn({ clearCity }) {
  return (
    <button type="button" className="btn" onClick={() => clearCity()}>
      Clear
    </button>
  );
}

CityClearBtn.propTypes = {
  clearCity: PropTypes.func.isRequired,
};

export default memo(CityClearBtn);
