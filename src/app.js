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

let bus = {};
bus = _.extend(bus, Backbone.Events);

$(document).ready(function() {
  const movies = new MovieList();
  movies.fetch();

  console.log('FETCHED MOVIES:');
  console.log(movies);

  // const movieData = fetchedMovies.responseJSON
  // console.log('MOVIE DATA:');
  // console.log(movieData);

  const movieListView = new MovieListView({
    model: movies,
    template: _.template($('#movie-template').html()),
    el: 'main',
  });

  movieListView.render();
  // $('#main-content').append('<p>Hello World!</p>');

});
