import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

import Movie from 'models/movie';
import MovieList from 'collections/movie_list';
import MovieView from 'views/movie_view';
import MovieListView from 'views/movie_list_view';

let movieList = new MovieList();

let movieTemplate;
// let movieDetailTemplate;

$(document).ready(function() {
  
  movieList.fetch({
    success: (model, response) => {
      console.log(model, response);
    }
  })

  movieTemplate = _.template($('#movie-template').html());
  // movieDetailTemplate = _.template($('#movie-detail-template').html());

  $('#main-content').append('<p>Hello World!</p>');

});
