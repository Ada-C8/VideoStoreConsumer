import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

//MODELS AND COLLECTIONS
import Movie from './models/movie';
import MovieList from './collections/movie_list';

//VIEWS
import MoviesView from './views/movies_view';
import MoviesLibraryView from './views/movies_library_view';

const movieList = new MovieList()
// ready to go
$(document).ready(function() {

  const moviesLibraryTemplate = _.template($('#movie-template').html());

  movieList.fetch()

  // const movies = new MovieList;////NOTE/(API call data);

  const moviesLibraryView = new MoviesLibraryView({
    el: '#movies-container',
    model: movies,
    template: moviesLibraryTemplate,
  });

});
