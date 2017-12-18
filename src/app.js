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
  const movieList = new MovieList;
  movieList.fetch();

  $('#main-content').append('<p>Hello World!</p>');

});
