import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

import Movie from './models/movie';
import MovieView from './views/movie_view';
import MovieListView from './views/movie_list_view';
import MovieList from './collections/movie_list';


let movieTemplate;
// ready to go
$(document).ready(function() {

  // let bus = {};

  // bus = _.extend(bus, Backbone.Events);
  movieTemplate = _.template($('#movie-template').html());
  // orderTemplate = _.template($('#order-template').html());


  const movies = new MovieList();

  // TODO: check fetch and rerendering
  movies.fetch();

  const movieListView = new MovieListView({
    el: 'main',
    model: movies,
    template: movieTemplate,
    // bus: bus,
  });

  // movieListView.render();

  // $('#main-content').append('<p>Hello World!</p>');

});
