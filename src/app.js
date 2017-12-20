import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

//MODELS AND COLLECTIONS
import Movie from './models/movie';
import MovieList from './collections/movie_list';

//VIEWS
import MovieView from './views/movie_view';
import MoviesLibraryView from './views/movies_library_view';

// ready to go
$(document).ready(function() {

  const moviesLibraryTemplate = _.template($('#movie-template').html());

  const movies = new MovieList();
  // movies.fetch()

  // $('.movies-appear').hide()

  $('.view-library-btn').click(function() {
    console.log('in the view library button');
    movies.fetch({
      reset: true
    })
  });

  const moviesLibraryView = new MoviesLibraryView({
    el: '#movies-container',
    model: movies,
    template: moviesLibraryTemplate,
  });

  moviesLibraryView.render();

  $('#movie-search-form').on('submit', function(event) {
    event.preventDefault();
    // console.log(event);
    let queryText = $('#query').val().trim();
    if (queryText.length > 0 ){
      movies.fetch({
        reset: true,
        data: { query: queryText }
      });
    } else {
      movies.fetch();
      // movies.reset();
    }

  });

  // $('#movies-container').on('click', function(event){
  //   movies.fetch({
  //     reset: true
  //   });
  // })

});
