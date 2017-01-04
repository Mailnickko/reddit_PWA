import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import initReducer from './initReducer';

const rootReducer = combineReducers({
  initReducer: initReducer,
  routing: routerReducer,
});

export default rootReducer;
