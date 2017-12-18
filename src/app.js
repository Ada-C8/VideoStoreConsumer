import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

import Movie from 'models/movie';
import MovieList from 'collections/movie_list';
import MovieView from 'views/movie_view';
import MovieListView from 'views/movie_list_view';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

let catalog = new MovieList();
let database = new MovieList();

// ready to go
$(document).ready(function() {
  $('#main-content').append('<p>Hello World!</p>');

  

});
