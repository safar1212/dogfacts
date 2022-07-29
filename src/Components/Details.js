import React, { useEffect } from "react";
import dogPic from "../images/dogs.png";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dogActions } from "../Redux/mainPage";

import { useSelector } from "react-redux";

const Details = () => {
  const dispatch = useDispatch();

  const dog = useSelector((state) => state.dog);
  console.log("dog state", dog);

  const { messageName } = useParams();
  
  // const capital = messageName.toLocaleUpperCase();
  // console.log(capital);

  const fetchDogsDetails = () => async (dispatch) => {
    const fetchingData = async () => {
      const response = await fetch(
        `https://dog.ceo/api/breed/${messageName}/list`
      );
      const data = await response.json();
      return data;
    };

    try {
      const testdetails = await fetchingData();
        console.log(testdetails);
      dispatch(dogActions.showDetail(testdetails));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(fetchDogsDetails());
  }, []);

  const listItem = dog.map(dog=>{
    return <li key={dog.id}>{dog.id + 1}{':'}{' '}{dog.name}</li>;
  });

  return (
    <div>
      <div key={dog.id} className="details-div">
        <img src={dogPic}></img>
        <div id={dog.id} className="species">
          <div>
            <h3>BREED:{messageName}</h3>
          </div>
          <div key={dog.id}>
            <h4>SUB BREED NAMES</h4>
          </div>
          <div className="sub-breed-list">
            {Object.keys(dog).length === 0 ? (
              <div><h5>No sub breeds</h5></div>
            ) : (
              <ul>{listItem}</ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
