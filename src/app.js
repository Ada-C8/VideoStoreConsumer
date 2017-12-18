import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';
import Movie from 'models/movie';
import MovieList from 'collects/movie_list';
import MovieView from 'views/movie';
import MovieListView from 'view/movie_list';

// ready to go
$(document).ready(function() {

  $('#main-content').append('<p>Hello World!</p>');

});
