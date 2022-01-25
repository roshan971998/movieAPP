import React from 'react';
//import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, setShowFavourites } from '../actions';
import { data as moviesList } from '../data';
import { connect, StoreContext } from '../index';
import NavbarWrapper from './Navbar';

class App extends React.Component {
  componentDidMount() {
    this.props.store.subscribe(() => this.forceUpdate());
    this.props.store.dispatch(addMovies(moviesList));
  }

  isMovieInFavourites = (movie) => {
    const { movies } = this.props.store.getState();

    const index = movies.favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }

    return false;
  };

  changeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  };
  render() {
    const { movies, search } = this.props.store.getState(); // will return { movies: {}, search: []}
    //console.log('movies', movies);
    const { list, favourites, showFavourites } = movies;
    const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <NavbarWrapper search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? '' : 'active-tabs'}`}
              onClick={() => this.changeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? 'active-tabs' : ''}`}
              onClick={() => this.changeTab(true)}
            >
              Favourites
            </div>
          </div>

          <div id="list">
            {displayMovies.map((movie) => (
              <MovieCard
                movie={movie}
                key={movie.imdbID}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieInFavourites(movie)}
              />
            ))}
            {displayMovies.length === 0 ? (
              <div className="no-movies">No movies to display! </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

//note StoreContext.Consumer can be used only inside render method 
//and all those components which are using StoreContext.Consumer their render method get 
///called automatically whenever there is change in value or variable (here store) passed to Provider 
class AppWrapper extends React.Component {
  render() {
    return (
      <StoreContext.Consumer>
        { (store) => <App store={store} />  }
      </StoreContext.Consumer>
    );
  }
}

export default AppWrapper;


// function mapStateToProps(state){      function mapStateToProps({movies,search}){
//   return {                               return {movies,search};
//     movies:state.movies,          or  }
//     search:state.search
//   };
// }

// const connectedAppComponent = connect(mapStateToProps)(App);
// export default connectedAppComponent;



