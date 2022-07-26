import { configureStore } from '@reduxjs/toolkit';
import { dogsInfo } from './mainPage';



const store = configureStore({
  reducer: { dog: dogsInfo.reducer}
});
export default store;