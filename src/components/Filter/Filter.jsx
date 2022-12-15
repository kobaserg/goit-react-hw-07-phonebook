import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { isFilter } from 'redux/phonebookSlice';

export function Filter() {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Find contact by Name</h3>
      <label>
        <input
          type="text"
          onChange={event => dispatch(isFilter(event.target.value))}
        ></input>
      </label>
    </div>
  );
}

Filter.propTypes = {
  props: PropTypes.object,
};
