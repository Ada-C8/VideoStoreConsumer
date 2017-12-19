import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

import Movie from 'models/movie';
import MovieList from 'collections/movie_list';
import MovieListView from 'views/movie_list_view';

  const allMovieList = function(event){
    const movies = new MovieList();
    movies.fetch();


  };

  const searchDbList = function(event){
    event.preventDefault();
    const searchParams = $('#searchParams').val();

    const returnedList = new MovieList();
    returnedList.searchUrl(searchParams);
    returnedList.fetch();

    const searchReturns = new MovieListView({
      model:returnedList,
      template: _.template($('#return-template').html()),
      el: 'main'
    });
    searchReturns.render();
  };


  // ready to go
  $(document).ready(function() {
    // $('.list_movies').click(allMovieList);


    const movieListView = new MovieListView({
        model: movies,
        template: _.template($('#movie-template').html()),
        el: 'main'
    }); // end of const
    movieListView.render();

    $('#search-form').submit(searchDbList);
  });
