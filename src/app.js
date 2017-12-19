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

  const movieListView = new MovieListView({
    el: '#main-content',
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

// RETURNS BACK
//
// attributes
// :
// external_id
// :
// null
// id
// :
// 196
// image_url
// :
// "/psJb2NQKUWDQyhMRV3hoEWk60gS.jpg"
// overview
// :
// "The discovery of a severed human ear found in a field leads a young man on an investigation related to a beautiful, mysterious nightclub singer and a group of criminals who have kidnapped her child."
// release_date
// :
// "1986-08-01"
// title
// :
// "Blue Velvet"
