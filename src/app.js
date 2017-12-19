import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

import StoreLibrary from 'collections/store_library';
import StoreMovie from 'models/store_movie';
import APIMovies from 'collections/api_movies';
import APIMovie from 'models/api_movie';

import StoreLibraryView from 'views/store_library_view';
import StoreMovieView from 'views/store_movie_view';
import APIMoviesView from 'views/api_movies_view';
import APIMovieView from 'views/api_movie_view';


$(document).ready(function() {

  const storeLibrary = new StoreLibrary();
  storeLibrary.fetch();

  const storeLibraryView = new StoreLibraryView({
    model: storeLibrary,
    template: _.template($('#store-movie-template').html()),
    el: 'main'
  });
  storeLibraryView.render();

  const apiMovies = new APIMovies();

  const apiMoviesView = new APIMoviesView({
    model: apiMovies,
    template: _.template($('#api-movie-template').html()),
    el: 'main'
  });
  apiMoviesView.storeLibrary = storeLibrary;

  $('.submit-btn').on('click', function(e) {
    e.preventDefault();
    const query = $('input[name=query]').val();
    apiMovies.fetch({data: {query:`${query}`}});
    apiMoviesView.render();
  });

});
