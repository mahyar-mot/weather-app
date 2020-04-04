//import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import WeatherReducer from './weather_reducer';


// export default configureStore({
//   reducer: {
//     weather: WeatherReducer
//   },
// });


const rootReducer = combineReducers(
  {
    weather:WeatherReducer
  }
);
export default rootReducer;