import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

// Our stuff
import Movie from 'models/movie';
import MovieList from 'collections/movie_list';
import MovieView from 'views/movie_view';
import MovieListView from 'views/movie_list_view';

const movieList = new MovieList();



// ready to go
$(document).ready(function() {

  movieList.fetch({
    success: () => {
      console.log(movieList);
      movieList.render();
    },
  });




});
