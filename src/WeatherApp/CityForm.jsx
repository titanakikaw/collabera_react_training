import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const CityForm = forwardRef(({ getCity }, ref) => (
  <form className="cityform" onSubmit={e => getCity(e)}>
    <input ref={ref} type="text" className="cityform__input" />
    <button type="submit" className="cityform__btn btn">
      Search City
    </button>
  </form>
));

CityForm.propTypes = {
  getCity: PropTypes.func.isRequired,
};

export default memo(CityForm);
