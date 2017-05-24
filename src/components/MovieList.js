import React from 'react';
import { connect } from 'react-redux';

import { fetchMovies } from '../actions';

class MovieList extends React.Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render () {
    return (
      <div className="App-intro">
      {this.props.movieList.length === 0 && <h1>Now Loading...</h1>}
        { this.props.movieList.map(
          (movie, index) =>
            <div key={index}>
              <p>
              Episode {movie.episode_id} - {movie.title}
              </p>
              <hr />
            </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
