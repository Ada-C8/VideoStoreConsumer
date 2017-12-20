import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import MovieList from 'collections/movie_list';
import CustomerList from 'collections/customer_list';

import MovieListView from 'views/movie_list_view';
import CustomerListView from 'views/customer_list_view';

import './css/styles.css';

// ready to go
$(document).ready(function() {

  let bus = {};
  bus = _.extend(bus, Backbone.Events);

  // movies
  const movies = new MovieList();
  movies.fetch();

  const movieListView = new MovieListView({
    model: movies,
    template: _.template($('#movie-template').html()),
    bus: bus,
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

  $('body').on('mouseenter', 'li', function(event) {
    $(this).find('.summary').fadeIn(200);
    $(this).find('.details').fadeIn(200);
    $(this).find('.thumbs').fadeIn(200);
  });

  $('body').on('mouseleave', 'li', function(event) {
    $(this).find('.summary').fadeOut(200);
    $(this).find('.details').fadeOut(200);
    $(this).find('.thumbs').fadeOut(200);
  });
});
