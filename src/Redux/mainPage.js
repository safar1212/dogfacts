// import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

import { createSlice } from '@reduxjs/toolkit';

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
          name: action.payload.message[key],
        //   total: action.payload.message.length,
        //   reserved: false,
        });
      });
      return dogArray;
    },

    },
});

export const dogActions = dogsInfo.actions;

export const getDogs = () => async (dispatch) => {
  const fetchingData = async () => {
    const response = await fetch('https://dog.ceo/api/breed/terrier/list/random/22');
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
