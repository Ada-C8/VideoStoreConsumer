import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';
import Movie from 'models/movie';
import MovieView from 'views/movie_view';
import MovieList from 'collections/movie_list';
import MovieListView from 'views/movie_list_view';



const movieList = new MovieList();
// ready to go
$(document).ready(function() {

  // $('#main-content').append('<p>Hello World!</p>');

  const movies = new MovieList();



  const movieListView = new MovieListView({
    model: movieList,
    template: _.template($('#movie-template').html()),
    el: 'main'
  });
});
