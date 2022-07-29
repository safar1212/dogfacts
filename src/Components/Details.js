import React, { useEffect } from "react";
// import pic from "../images/main-pic.png";
import dogPic from "../images/dogs.png";
import { useParams } from "react-router-dom";
// import axios from "react-axios";
import { useDispatch } from "react-redux";
import { dogActions } from "../Redux/mainPage";
// import { fetchDogsDetails } from "../Redux/mainPage";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux/es/exports";
// import { getDogs } from "../Redux/mainPage";
// import { dogActions } from "../Redux/mainPage";

const Details = () => {
  const dispatch = useDispatch();

  const dog = useSelector((state) => state.dog);
  console.log("dog state", dog);

    // const {id, name, species} = messageName;

  const { messageName } = useParams();
  
  const capital = messageName.toLocaleUpperCase();
  console.log(capital);

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
    return <li key={dog.id}>{dog.name}</li>;
  });

  return (
    <div>
      <div key={dog.id} className="details-div">
        <img src={dogPic}></img>
        <div id={dog.id} className="species">
          <div>
            <h2>{capital}</h2>
          </div>
          <div key={dog.id}>
            <h3>SUB BREED LIST</h3>
          </div>
          <div className="sub-breed-list">
            <ul>{listItem}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
