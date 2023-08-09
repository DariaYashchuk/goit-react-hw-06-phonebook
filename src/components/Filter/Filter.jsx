import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'components/redux/filter/filterSlice';
// import css from './';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const changeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        required
        onChange={changeFilter}
      />
    </div>
  );
};

export default Filter;
