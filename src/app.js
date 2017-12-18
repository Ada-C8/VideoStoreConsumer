import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import 'css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

// Models and views
import MovieList from './collections/movie_list';
import MovieView from './views/movie_view';
import MovieListView from './views/movie_list_view';

// Define Variables
let movieTemplate;

// Ready to go
$(document).ready(function() {
  // Templates
  movieTemplate = _.template($('#movie-template').html());

  const movieList = new MovieList();

  const movieListView = new MovieListView({
    el: $('main'),
    model: movies,
    template: movieTemplate,
  });

  movieListView.render();

  $('#main-content').append('<p>Hello World!</p>');


});
