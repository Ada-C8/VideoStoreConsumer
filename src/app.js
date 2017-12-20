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
  const searchList = new MovieList();

  const movieListView = new MovieListView({
    el: $('.movies'),
    model: movieList,
    collection: searchList,
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
  movieListView.render(false);

  // Search event
  $('#search-form').on('submit', function(e){
    e.preventDefault();
    let queryText = $('#search-form input').val();

    if (queryText.length > 0 ) {
      console.log(queryText);
      searchList.fetch({
        data: {query: queryText},
      });
      movieListView.render(true);
    }
    $('#search-form input').val('');
  });

  // Rental Library
  $('#movies').on('click', function(){
    movieList.fetch();
    movieListView.render();
  });

  // Check Library
  $('li.movie').on('click', function() {
    let library = movieList.fetch();
    console.log(library);


  });

});



// movie_data = MovieWrapper.getMovie(params[:id])
//
// if Movie.where(overview: movie_data["overview"]).length > 0
//   # add an error message for the user
// else
//   movie = Movie.new do |m|
//     m.title = movie_data["title"]
//     m.overview = movie_data["overview"]
//     m.release_date = movie_data["release_date"]
//     m.image_url = movie_data["poster_path"]
//   end
//
//   movie.save
// end
