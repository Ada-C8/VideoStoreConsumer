import $ from 'jquery';
import _ from 'underscore';
// CSS
import './css/foundation.css';
import 'css/_settings.css';
import './css/style.css';

import MovieList from 'collections/movie_list';
import MovieListView from './views/movie_list_view';

let moviesTemplate;

// ready to go
$(document).ready(function() {
  // TEMPLATES
  moviesTemplate = _.template($('#movie-template').html());
  // overviewTemplate = _.template($('#movie-template').html());
  // createNewMovieTemplate = _.template($('#create-new-movie-template').html());
  const movies = new MovieList();
  console.log("Set up movieList");

  const movieListView = new MovieListView ({
    model: movies,
    template: _.template($('#movie-template').html()),
    el: 'main',
  });
  console.log("before fetch");

  movies.fetch(); //bb will call rails s

  $('#movie-search-form').on('submit', function(event) {
    event.preventDefault();
    let queryText = $('#query').val().trim();
    if (queryText.length > 0) {
      movies.fetch({
        reset: true, //instead of merging by default, clear out
        data:  { query: queryText }
      });
    }
    else {
      movies.reset();
    }
    // console.log(query);
  });

/// HEADER ANIMATIONS ///
  $('#show-movies').on('click', function(event) {
    movies.fetch({
      reset: true,
    });
    $('header').slideUp(1000); //show library list
    $('#movie-search-form').slideDown(1000);
    $('#movie-library').slideDown(1000); //header height
  });

  $('#title').on('click', function(event) {
    movies.fetch({
      reset: true,
    });
    $('#movie-library').slideDown(1000);
  });

/// RESULTS ANIMATIONS ///

});

//instruct bb to retrieve data
