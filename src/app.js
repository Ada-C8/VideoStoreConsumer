import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import 'css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

// Models and views
import Movie from './models/movie';
import MovieList from './collections/movie_list';
import MovieView from './views/movie_view';
import MovieListView from './views/movie_list_view';
import ShowView from './views/show_view';

// Define Variables
let movieTemplate;
let showTemplate;

// Ready to go
$(document).ready(function() {
  // Event Bus
  let bus = {};
  bus = _.extend(bus, Backbone.Events);

  // Templates
  movieTemplate = _.template($('#movie-template').html());
  showTemplate = _.template($('#show-template').html());

  const movieList = new MovieList();
  const movieListView = new MovieListView({
    el: $('.movies'),
    model: movieList,
    template: movieTemplate,
    bus: bus,
  });

  const showView = new ShowView({
    el: $('section.movie'),
    template: showTemplate,
    bus: bus,
    collection: movieList
  })

  movieList.fetch();
  movieListView.render();

  // Search event
  $('#search-form').on('submit', function(e){
    e.preventDefault();
    let queryText = $('#search-form input').val();

    if (queryText.length > 0 ) {
      console.log(queryText);
      movieList.fetch({
        data: {query: queryText},
      });
      movieListView.render();
    }
    $('#search-form input').val('');
  });

  // Rental Library
  $('#movies').on('click', function(){
    movieList.fetch();
    movieListView.render();
  });

});
