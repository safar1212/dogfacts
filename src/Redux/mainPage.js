// import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

import { createSlice } from '@reduxjs/toolkit';
import { at } from 'lodash';

const initialState = [];

export const dogsInfo = createSlice({
  name: 'dogs',
  initialState,
  reducers: {
    dogs(state, action) {
      const dogArray = [];
      Object.keys(action.payload.message).forEach((key, index) => {
        dogArray.push({
          id: index,
          name:key,
          species: action.payload.message[key],
          // name: action.payload.message[key],
        //   total: action.payload.message.length,
        //   reserved: false,
        });
      });
      return dogArray;
    },
    sort(state, action) {
      return action.payload;
    },

    showDetail(state, action) {
      // return [...state, action]
      const speciesArray = [];
      action.payload.message.forEach((key, index) => {
        speciesArray.push({
          id: index,
          name:key,
          // species: action.payload.message[key],
        });
      });
      console.log("showDetail", speciesArray);
      return speciesArray;
    }

    },
});

export const dogActions = dogsInfo.actions;


export const getDogs = () => async (dispatch) => {
  const fetchingData = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/list/all/random/44');
    const data = await response.json();
    return data;
  };

  try {
    const testdata = await fetchingData();
    // console.log(testdata);
    dispatch(dogActions.dogs(testdata));
  } catch (error) {
    console.log(error);
  }
};





