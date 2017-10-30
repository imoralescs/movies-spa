import { combineReducers } from 'redux';
import { app } from './app.js';
import { login } from './login.js';
import { course } from './course.js';
import { courses } from './courses.js';
import { categories } from './categories.js';

const setSearchTerm = (state, payload) => Object.assign({}, state, {
  searchTerm: payload
});

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
  login,
  course,
  courses,
  categories,
  search
});
