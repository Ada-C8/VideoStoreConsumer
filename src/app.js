import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

// Our Project Models, Collections, Views
import LibMovie from './models/lib_movie';
import LibMovieList from './collections/lib_movie_list';
// template varibles

let libraryMovieTemplate;

// ready to go
$(document).ready(function() {
  //  underscore templates


  libraryMovieTemplate = _.template($('#library-movietemplate').html());

  // $('#main-content').append('<p>Hello World!</p>');

});
