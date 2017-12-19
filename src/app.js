import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

import Movie from './models/movie';
import MovieView from './views/movie_view';
import MovieListView from './views/movie_list_view';
import MovieList from './collections/movie_list';
import Search from './models/search';
import SearchView from './views/search_view';
import SearchListView from './views/search_list_view';
import SearchList from './collections/search_list';


let movieTemplate;
let searchTemplate;
// ready to go
$(document).ready(function() {

  let bus = {};
  bus = _.extend(bus, Backbone.Events);
  
  movieTemplate = _.template($('#movie-template').html());
  searchTemplate = _.template($('#search-template').html());

  // orderTemplate = _.template($('#order-template').html());


  const movies = new MovieList();
  const searches = new SearchList({
    // query: "",
  });


  const movieListView = new MovieListView({
    el: '#movie-list',
    model: movies,
    template: movieTemplate,
    bus: bus,
  });

  const searchListView = new SearchListView({
    el: '#movie-search',
    model: searches,
    template: searchTemplate,
    bus: bus,
  });


  // TODO: check fetch and rerendering
  movies.fetch();
  // movieListView.render();

  // $('#main-content').append('<p>Hello World!</p>');

});
