import { combineReducers } from 'redux';

// importing function from reducer_weather file and assigning it to WeatherReducer
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});


export default rootReducer;
