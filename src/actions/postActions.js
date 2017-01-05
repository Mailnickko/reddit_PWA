import axios from 'axios';
import * as types from './actionTypes';

export function getPosts(query) {
  const subreddit = query && query !== 'hot' ? `r/${query}` : query;
  return dispatch => {
    fetch(`https://www.reddit.com/${subreddit}.json?limit=10`)
      .then(resp => resp.json())
      .then(({data}) => dispatch({ type: types.FETCHED_POSTS, posts: data.children }))
      .catch(error => dispatch({ type: types.FETCH_ERROR, error }));
  }
}

export function setQuery(query) {
  return{
    type: types.QUERY_CHANGE,
    query
  }
}
