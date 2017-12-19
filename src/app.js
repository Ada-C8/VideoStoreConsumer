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
import MovieView from './views/movie_view';
import MoviesLibraryView from './views/movies_library_view';

// ready to go
$(document).ready(function() {

  const moviesLibraryTemplate = _.template($('#movie-template').html());




  const movies = new MovieList();
  movies.fetch()

  // $('.movies-appear').hide()
  const moviesLibraryView = new MoviesLibraryView({
    el: '#movies-container',
    model: movies,
    template: moviesLibraryTemplate,
  });

  moviesLibraryView.render();

});
