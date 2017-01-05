import { FETCHED_POSTS, FETCH_ERROR } from '../actions/actionTypes';

const INIT_STATE = {
  posts: [],
  error: ''
}

export default function postsReducer (state = INIT_STATE, action) {
  switch(action.type) {
    case FETCHED_POSTS:
      return { ...state, posts: action.posts };
    case FETCH_ERROR:
      return { ...state, error: action.error }
    default:
      return state;
  }
}
