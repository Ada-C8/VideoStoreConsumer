import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';
import Movie from 'models/movie';
import MovieList from 'collections/movie_list';
import MovieView from 'views/movie_view';
import MovieListView from 'views/movie_list_view';

// ready to go
$(document).ready(function() {
  const movies = new MovieList();
  const fetchedMovies = movies.fetch();
  console.log(fetchedMovies);

  $('#main-content').append('<p>Hello World!</p>');

});
