import axios from 'axios';

export function setSearchTerm(searchTerm) {
  return {
    type: 'SET_SEARCH_TERM',
    payload: searchTerm
  };
}

export function loadNowPlaying() {
  return function(dispatch) {
    dispatch({ type: 'NOW_PLAYING_REQUEST' });
    return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=e7460b842aa53d9b75d10fe34b62ac7d&language=en-US&page=1`)
      .then((response) => {
        let size = 6;
        let items = response.data.results.slice(0, size);
        return items;
      })
      .then((items) => {
        dispatch({ type: 'NOW_PLAYING_SUCCESS', payload: items});
        return items;
      })
      .catch((error) => {
        return error;
      });
  };
}

export function loadUpcoming() {
  return function(dispatch) {
    dispatch({ type: 'UP_COMING_REQUEST' });
    return axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=e7460b842aa53d9b75d10fe34b62ac7d&language=en-US&page=1`)
      .then((response) => {
        dispatch({ type: 'UP_COMING_SUCCESS', payload: response.data.results});
        return response;
      })
      .catch((error) => {
        return error;
      });
  };
}