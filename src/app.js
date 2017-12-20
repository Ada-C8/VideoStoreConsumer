import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

import Backbone from 'backbone';

import Movie from './models/movie';
import MovieList from './collections/movie_list';
import MovieListView from './views/movie_list_view';

// let movieTemplate;

let movieList = new MovieList();

let bus = {};
bus = _.extend(bus, Backbone.Events);

// ready to go
$(document).ready(function() {

  // movieList.fetch().done(() => {
    const movieListView = new MovieListView({
      model: movieList,
      template: _.template($('#movie-template').html()),
      el: 'main',
      bus: bus,
    })
    movieListView.render();
    // console.log(movieList);

  // });

  $('#main-content').append('<p>Movies!</p>');

});
