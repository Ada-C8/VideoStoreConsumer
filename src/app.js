import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

// Import models and collections
import Movie from 'models/movie'
import MovieList from 'collections/movie_list'
import MovieListView from './views/movie_list_view'
import SearchListView from './views/search_list_view'

// ready to go
$(document).ready(function() {

  let bus = {};
  bus = _.extend(bus, Backbone.Events);

  const movieTemplate = _.template($('#all-movies-template').html());
  const searchTemplate = _.template($('#search-results').html());

  const moviesList = new MovieList();

  console.log("this is moesList");
  console.log(moviesList);

  const searchListView = new SearchListView({
    el: $('#search-view'),
    template: searchTemplate,
    bus: bus,
    movies: moviesList,
  });

  const movieListView = new MovieListView({
    model: moviesList,
    template: movieTemplate,
    el: $('#list-movies'),
    bus: bus,
  });

  moviesList.fetch();

});
