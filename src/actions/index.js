export const fetchMovieSuccess = (movie) => {
  return {
    type: 'FETCH_MOVIE_SUCCESS',
    payload: movie
  }
}

export const fetchMovies = () => {
  return (dispatch) => {
    fetch('http://swapi.co/api/films')
    .then(res => res.json())
    .then(data => dispatch(fetchMovieSuccess(data.results)));
  }
}