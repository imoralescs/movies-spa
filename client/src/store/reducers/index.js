import { combineReducers } from 'redux';
import { app } from './app.js';

const setSearchTerm = (state, payload) => Object.assign({}, state, {
  searchTerm: payload
});

export function now_playing(state, { type, payload = null}) {
  state = state || [];
  switch (type) {
    case 'NOW_PLAYING_SUCCESS': {
      const newState = state.concat(payload);
      return newState;
    }
    default: {
      return state;
    }
  }
}

function search(state, { type, payload = null}) {
  state = state || {
    searchTerm: ''
  };
  switch (type) {
    case 'SET_SEARCH_TERM': {
      return setSearchTerm(state, payload);
    }
    default: {
      return state;
    }
  }
}


export default combineReducers({
  app,
  search,
  now_playing
});
