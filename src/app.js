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

let movieTemplate;
let movieListView;

const movieList = new MovieList();

const movieSearch = function movieSearch(e) {
  e.preventDefault();

  const query = $('#search input[name="query"]').val();

  const searchList = new MovieList(
    {
      query: query,
    }
  );

  searchList.fetch({
    success: () => {
      const newView = new MovieListView({
        model: searchList,
        template: movieTemplate,
        el: $('#movie-list'),
      });
      newView.render();
    }
  });
};

const addMovie = function addMovie(e) {
  e.preventDefault();
  // console.log($('#new-movie').serialize());
  const movie = new Movie({
    title: "Test Movie",
  });
  movie.save({
    success: () => {
      movieList.add(movie);
    }
  });
};

// ready to go
$(document).ready(function() {
  movieTemplate = _.template($('#movie-template').html());

  movieList.fetch({
    success: () => {
      movieListView = new MovieListView({
        model: movieList,
        template: movieTemplate,
        el: $('#movie-list'),
      });
      movieListView.render();
    },
  });

  $('#search').on('submit', movieSearch);

  $('.add-btn').on('click', () => {
    $('.add-btn').hide(200);
    $('#new-movie').show(500);
  });

  $('#new-movie').on('submit', addMovie);

});
