import React, {useEffect, useState} from "react";
import pic from "../images/main-pic.png";
import dogPic from "../images/dogs.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { getDogs } from "../Redux/mainPage";
import { dogActions } from "../Redux/mainPage";

const HomePage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
  }, []);


  const dog = useSelector((state) => state.dog );
  // console.log(dog);

  const Ascending = (order) => {
    // console.log(order);
    let sorted;

    if(order === 'z-a') {
     sorted = [...dog].sort((a,b) => b.name.localeCompare(a.name));
    } else if(order === 'a-z') {
      sorted = [...dog].sort((a,b) => a.name.localeCompare(b.name)); 
    }
    // console.log(sorted);
    dispatch(dogActions.sort(sorted));
  }

  return (
    <div className="page">
      <div className="main-section">
        <img src={pic} alt="dog-pic"></img>
        <div className="main-count">
          <h2>Total Breeds</h2>
          <h2>{dog.length}</h2>
        </div>
      </div>
      <div className="sort-wrap">
        <div className="sort-dogs">
          <span className="sort-title">Sort By Order:</span>
          <select className="sort" onChange={(e) => { Ascending(e.target.value) }}>
            <option value="sort">Sort</option>
            <option value="a-z">A to Z</option>
            <option value="z-a">Z to A</option>
          </select>
        </div>
      </div>
      {dog.map((data) => (
      <div key={data.id} className="dogs-list">
        <div id={data.id} className="first-column">
          <img src={dogPic} alt="dog"></img>
          <h3>Dog's Breed</h3>
          <h3>{data.name}</h3>
        </div>
      </div>
      ))}
    </div>
  );
};

export default HomePage;
