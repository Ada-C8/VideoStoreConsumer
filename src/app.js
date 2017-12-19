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

$(document).ready(function() {

  let bus = {};
  bus = _.extend(bus, Backbone.Events);

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

  movieTemplate = _.template($('#movie-template').html());
  returnedMovieTemplate = _.template($('#returned-movie-template').html());

  const movieListView = new MovieListView({
    el: '#current-rentals-view',
    template: movieTemplate,
    model: movieList,
    bus: bus,
  });

  // const returnedMovieView = new ReturnedMovieView({
  //   el: 'li',
  //   template:
  // });

  //console.log(movieList.length);

  // movieListView.render();

  // $('#search-form button').on('click', function () {
  //   let query = $('#search-form input').val();
  //   let url = movieListView.search(query);
  //
  //   movieList.set('url', url);
  //   result = movieList.fetch();
  //   // console.log(`the result is ${result}`);
  // });

}); // DOCUMENT READY
