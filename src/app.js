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
import Application from './models/application.js';

//collections
import CustomerList from '/collections/customer_list';
import MovieList from './collections/movie_list';

//views
import CustomerListView from '/views/customer_list_view';
import MovieListView from './views/movie_list_view';
import MovieView from './views/movie_view';
import ApplicationView from './views/application_view.js';

let application = new Application();
let movieList = new MovieList();
movieList.fetch();

// ready to go
$(document).ready(function() {
let appView = new ApplicationView({
  el: 'body',
  model: application,
  movieListTemplate: _.template($('#movie-template').html()),
  movieList: movieList,
  movieDetailsTemplate: _.template($('#movie-info-template').html())
});
appView.showList();
});
