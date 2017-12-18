import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

//import models and collections
import MovieList from 'collections/movie_list';

// import views
import MovieListView from 'views/movie_list_view';


// ready to go
$(document).ready(function() {
  let bus = {};
  bus = _.extend(bus, Backbone.Events);

  const movieList = new MovieList;
  // tripList.on('update', render, tripList);
  movieList.fetch();
  const movieListView = new MovieListView({
    model: movieList,
    template: _.template($('#movie-template').html()),
    el: 'movies-container',
    bus: bus,
  })

  movieListView.render();


});
