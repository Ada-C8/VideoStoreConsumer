import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';
import MovieList from './collections/movie_list';
import Movie from './models/movie';
import MovieListView from './views/movie_list_view';
import MovieView from './views/movie_view';

let movieTemplate;
// ready to go
const movieList = new MovieList();

$(document).ready(function() {
  movieTemplate = _.template($('#movie-template').html());
  $('#main-content').append('<p>Hello World!</p>');




  console.log(movieList);
  // debugger
  console.log('that is the movie list^^^^');

  const movieListView = new MovieListView({
    el:'main',
    model: movieList,
    template: movieTemplate,
  });


  movieList.fetch({
    success: function(collection, response){}
  });
});
