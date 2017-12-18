import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

import Movie from './models/movie';
import MovieList from './collections/movie_list';

let movieTemplate;

let movieList = new MovieList();



// ready to go
$(document).ready(function() {

  $('#main-content').append('<p>Movies!</p>');

  movieList.fetch().done(() => {
    console.log(movieList);
  });

});
