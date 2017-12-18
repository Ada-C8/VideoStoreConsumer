import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

let libraryMovieTemplate;



$(document).ready(function() {

  libraryMovieTemplate = _.template($('#library-movietemplate').html());

  // $('#main-content').append('<p>Hello World!</p>');

});
