import { combineReducers } from 'redux';

const setSearchTerm = (state, payload) => Object.assign({}, state, {
  searchTerm: payload
});

export function upcoming(state, { type, payload = null}) {
  state = state || [];
  switch (type) {
    case 'UP_COMING_SUCCESS': {
      const newState = state.concat(payload);
      return newState;
    }
    default: {
      return state;
    }
  }
}

export function nowplaying(state, { type, payload = null}) {
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
  search,
  nowplaying,
  upcoming
});
