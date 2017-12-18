import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

import MovieList from 'collections/movie_list';
import MovieListView from 'views/movie_list_view';

import CustomerList from 'collections/customer_list';
import CustomerListView from 'views/customer_list_view';

// ready to go
$(document).ready(function() {

  // movies
  const movies = new MovieList();
  movies.fetch();

  const movieListView = new MovieListView({
    model: movies,
    template: _.template($('#movie-template').html()),
    // bus: bus,
    el: 'body'
  });

  // customers
  const customers = new CustomerList();
  customers.fetch();

  const customerListView = new CustomerListView({
    model: customers,
    template: _.template($('#customer-template').html()),
    el: 'main'
  });

  // movieListView.render();
});
