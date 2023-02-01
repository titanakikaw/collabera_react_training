import React, { memo } from 'react';
import PropTypes from 'prop-types';

const filterBtns = [
  {
    text: 'All',
    value: 'all',
  },
  {
    text: 'Pending',
    value: 'pending',
  },
  {
    text: 'Completed',
    value: 'completed',
  },
];

function TodoFilter({ setFilterType }) {
  console.log('TodoFilter render');
  return (
    <div className="w-full flex">
      {filterBtns.map(x => (
        <button
          key={x.value}
          type="button"
          className="btn flex-1"
          onClick={() => setFilterType(x.value)}
        >
          {x.text}
        </button>
      ))}
    </div>
  );
}

TodoFilter.propTypes = {
  setFilterType: PropTypes.func.isRequired,
};

export default memo(TodoFilter);
