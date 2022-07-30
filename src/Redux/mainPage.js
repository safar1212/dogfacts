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
          name: key,
          species: action.payload.message[key],
        });
      });
      return dogArray;
    },
    sort(state, action) {
      return action.payload;
    },

    showDetail(state, action) {
      const speciesArray = [];
      action.payload.message.forEach((key, index) => {
        speciesArray.push({
          id: index,
          name: key,
        });
      });
      return speciesArray;
    },

    searchDogs: (state, action) => action.payload
    // const { payload: { name } } = action;
    // const newState = dogs.filter((dog) => {
    //   if (dog.name === name) {
    //     return dog;
    //   }
    //   return null;
    // });
    // return { ...state, data: [...newState] };
    ,

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
