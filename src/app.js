import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

// models
import Backbone from 'backbone';
import Customer from '/models/customer';
import Movie from './models/movie';

//collections
import CustomerList from '/collections/customer_list';
import MovieList from './collections/movie_list';

//views
import CustomerListView from '/views/customer_list_view';
import MovieListView from './views/movie_list_view';
import MovieView from './views/movie_view';

let movieList = new MovieList();
movieList.fetch();

// $('#main-content').append('<p>this is the main content. I am in app.js </p>');

// ready to go
$(document).ready(function() {
  let movieListView = new MovieListView({
      model: movieList,
      template: _.template($('#movie-template').html()),
      el: 'body'
    });
    movieListView.render();
});
