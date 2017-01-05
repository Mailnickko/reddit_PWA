import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import initReducer from './initReducer';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  query: initReducer,
  posts: postsReducer,
  routing: routerReducer,
});

export default rootReducer;
