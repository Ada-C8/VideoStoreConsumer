import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

// Models and Collection
import Movie from 'models/movie';
import ReturnedMovie from 'models/returned_movie';
import MovieList from 'collections/movie_list';
import ReturnedMovieList from 'collections/returned_movie_list';

// Views
import MovieView from 'views/movie_view';
import MovieListView from 'views/movie_list_view';
import ReturnedMovieView from 'views/returned_movie_view'; // TODO: Do I need this?
import ReturnedMovieListView from 'views/returned_movie_list_view';

const movieList = new MovieList();
const returnedList = new ReturnedMovieList();

let movieTemplate;
let returnedMovieTemplate;


$(document).ready(function() {
  let bus = {};
  bus = _.extend(bus, Backbone.Events);

  movieTemplate = _.template($('#movie-template').html());
  returnedMovieTemplate = _.template($('#returned-movie-template').html());

  $('#imdb-section, #search-btn').hide();

  // Fetches all movies currently in the rental store
  movieList.fetch({
    success: (model, response) => {
      response.forEach((movie) => {
        movieList.add(movie);
      });
    },
    error: (model, response) => {
      console.log(`This is the model: ${model} in the app.js`);
      console.log(`This is the response: ${response} in the app.js`);
    },
  })

  const movieListView = new MovieListView({
    el: '#current-rentals-view',
    template: movieTemplate,
    model: movieList,
    bus: bus,
  });

  const returnedMovieListView = new ReturnedMovieListView({
    el: '#returned-movies-view',
    template: returnedMovieTemplate,
    model: returnedList,
    bus: bus,
  });

  $('input[type=radio][name=searchLocation]').change(function(){
    if (this.value === 'imdb'){
      $('#imdb-section, #search-btn').show();
      $('#current-rentals-view').hide();
    } else {
      $('#imdb-section, #search-btn').hide();
      $('#current-rentals-view').show();
    }
  });
}); // DOCUMENT READY
