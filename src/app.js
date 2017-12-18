import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

import Movie from 'models/movie';
import MovieList from 'collections/movie_list';
import MovieListView from 'views/movie_list_view';

// ready to go
$(document).ready(function() {
  const movies = new MovieList();

  const movieListView = new MovieListView({
      model: movies,
      template: _.template($('#movie-template').html()),
      el: 'main'
  }); // end of const

  movieListView.render();

});
