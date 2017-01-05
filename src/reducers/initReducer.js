import { QUERY_CHANGE } from '../actions/actionTypes';

const INIT_STATE = {
  query: ''
}

function initReducer (state = INIT_STATE, action) {
  switch(action.type) {
    case QUERY_CHANGE:
      return { ...state, query: action.query };
    default:
      console.log('Initializing....');
      return state;
  }
}

export default initReducer;
