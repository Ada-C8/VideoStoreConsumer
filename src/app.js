// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import collections and views
import MovieList from 'collections/movie_list';
import MovieListView from 'views/movie_list_view';


let eventBus = {};
eventBus = _.extend(eventBus, Backbone.Events);

// ready to go
$(document).ready(function() {

  const rentalLibraryList = new MovieList();
  rentalLibraryList.bus = eventBus;
  rentalLibraryList.fetch();


  const rentalLibraryListView = new MovieListView({
    model: rentalLibraryList,
    template: _.template($('#library-movie-template').html()),
    el: 'main',
    bus: eventBus,
  });
  rentalLibraryListView.listenTo(eventBus, 'showRentalLibrary', rentalLibraryListView.render);

  const searchList = new MovieList();
  searchList.bus = eventBus;

  const searchListView = new MovieListView({
    model: searchList,
    template: _.template($('#library-movie-template').html()),
    el: 'main',
    bus: eventBus,
  });
  searchListView.listenTo(eventBus, 'searchMovies', searchListView.searchMovies)

  $('#show-rental-library').on('click', function(event) {
    event.preventDefault();
    eventBus.trigger('showRentalLibrary');
  });

  $('#search-imdb-movies').on('submit', function(event) {
    event.preventDefault();
    const searchTerm = $('#searchTerm').val();
    eventBus.trigger('searchMovies', searchTerm);
  });
});
