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
import SearchView from './views/search_view'

// ready to go
$(document).ready(function() {

  const movieTemplate = _.template($('#all-movies-template').html());


  const moviesList = new MovieList();

  console.log("this is moesList");
  console.log(moviesList);

  const searchView = new SearchView({
    el: $('#search-view'),
  });

  const movieListView = new MovieListView({
    model: moviesList,
    template: movieTemplate,
    el: $('#list-movies'),
  });

  moviesList.fetch();
  // movieListView.render();





});
