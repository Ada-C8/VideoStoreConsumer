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

const TABLE_HEADERS = [ 'title', 'release_date']

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


  const modalOpener= function modalOpener() {
    // console.log(event)
    console.log('opening modal')
    $('.modal').removeClass('hide');
    $('#close').on('click', modalCloser)
  }

  const modalCloser= function modalCloser() {
    // console.log(event)
    console.log('closing modal')
    $('.modal').addClass('hide');
    $('.modal').addClass('hide');
  }

  $('#modalBtn').on('click', modalOpener);

  // const movieList = new MovieList()
  //
  // TABLE_HEADERS.forEach((field) => {
  //   const headerElement = $(`th.sort.${ field }`);
  //   headerElement.on('click', (event) => {
  //     console.log(`Sorting table by ${ field }`);
  //     movieList.comparator = field;
  //     movieList.sort();
  //   });
  // });

  // TODO: check fetch and rerendering
  movies.fetch();
  // movieListView.render();

  // $('#main-content').append('<p>Hello World!</p>');

});
