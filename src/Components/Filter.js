import React from 'react';
import { useDispatch } from 'react-redux';
import { dogActions } from '../Redux/mainPage';

/* eslint-disable react/prop-types */
const Filter = ({ dog }) => {
  const dispatch = useDispatch();
  const Ascending = (order) => {
    let sorted;
    if (order === 'z-a') {
      sorted = [...dog].sort((a, b) => b.name.localeCompare(a.name));
    } else if (order === 'a-z') {
      sorted = [...dog].sort((a, b) => a.name.localeCompare(b.name));
    }
    dispatch(dogActions.sort(sorted));
  };
  return (
    <div className="sort-dogs">
      <span className="sort-title">Sort By Order:</span>
      <select
        className="sort"
        onChange={(e) => {
          Ascending(e.target.value);
        }}
      >
        <option value="sort">Sort</option>
        <option value="a-z">A to Z</option>
        <option value="z-a">Z to A</option>
      </select>
    </div>
  );
};
export default Filter;
