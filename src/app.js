import $ from 'jquery';
import _ from 'underscore';
// CSS
import './css/foundation.css';
import 'css/_settings.css';
import './css/style.css';

import MovieList from 'collections/movie_list';

import MovieListView from './views/movie_list_view';

// ready to go
$(document).ready(function() {

  const movies = new MovieList();

  const movieListView = new MovieListView ({
    model: movies,
    template: _.template($('#movie-template').html()),
    el: 'main',
  });

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
    })
    // $('#show-movies').hide(); //hide show movies btn
    // $('#search-movies').show(); //show search btn
    $('#movie-library').show(); //show library list
    $('.hero').animate({height:'20vh'}); //header height
    $('.hero-section-text h1').animate({fontSize:'30px'}); //header font size
  });

  $('#search-movies').on('click', function(event) {
    $('#movie-search-form').slideDown();
  })
});

//instruct bb to retrieve data
