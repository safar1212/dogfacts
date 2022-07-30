import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import pic from '../images/main-pic.png';
import dogPic from '../images/dogs.png';
import { getDogs } from '../Redux/mainPage';
import Filter from './Filter';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, []);
  const dog = useSelector((state) => state.dog);

  const [filterDogsValue, setFilterDogsValue] = useState('');

  const filteredDogs = filterDogsValue ? dog.filter((breed) => (
    breed.name.toLowerCase().search(filterDogsValue.toLowerCase()) !== -1
  )) : dog;

  return (
    <div className="page">
      <div className="main-section">
        <img src={pic} alt="dog-pic" />
        <div className="main-count">
          <h2>Total Breeds</h2>
          <h2>{dog.length}</h2>
        </div>
      </div>
      <div className="sort-wrap">
        <Filter dog={dog} handleChange={setFilterDogsValue} />
      </div>
      {filteredDogs.map((data) => (
        <div key={data.id} className="dogs-list">
          <Link to={`/Dogs/${data.name}`}>
            <div id={data.id} className="first-column">
              <img id={data.id} src={dogPic} alt="dog" />
              <h3 id={data.id}>Dog&apos;s Breed</h3>
              <h3 id={data.id}>{data.name}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default HomePage;
