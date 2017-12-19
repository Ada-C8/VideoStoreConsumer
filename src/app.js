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
import MovieDetailsView from 'views/movie_list_view';

let bus = {};
bus = _.extend(bus, Backbone.Events);

$(document).ready(function() {
  const rentalMovies = new MovieList();
  rentalMovies.fetch();

  console.log('FETCHED MOVIES:');
  console.log(rentalMovies);
  // $('#results-container').hide();

  const movieListView = new MovieListView({
    model: rentalMovies,
    template: _.template($('#movie-template').html()),
    el: 'main',
  });

  movieListView.render();

  const searchedMovies = new MovieList();

  const resultsListView = new MovieListView({
    model: searchedMovies,
    libary: rentalMovies,
    template: _.template($('#movie-template').html()),
    el: 'main',
  });

  // $('#main-content').append('<p>Hello World!</p>');

});
