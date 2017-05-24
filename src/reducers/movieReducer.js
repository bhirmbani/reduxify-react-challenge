const initialState = []

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIE_SUCCESS': {
      const movies = action.payload.map(movie => {
        return {
          episode_id: movie.episode_id,
          title: movie.title,
          description: movie.opening_crawl,
          director: movie.director
        }
      });

      const newState = movies
      return newState;
    }

    default: return state;
  }
}

export default movieReducer;
