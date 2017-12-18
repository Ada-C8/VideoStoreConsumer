import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

// ready to go
$(document).ready(function() {

  moviesLibraryTemplate = _.template($('#movies-library-template').html());

  const movies = new MovieList;////NOTE/(API call data);

  const moviesLibraryView = new MoviesLibraryView({
    el: '',
    model: movies,
    template: moviesLibraryTemplate,
  });

  // $('#main-content').append('<p>Hello World!</p>');

});
