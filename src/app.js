import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone'

import MovieList from 'collections/movie_list';
import MovieListView from './views/movie_list_view';
import MainView from 'views/main_view';


let movieTemplate;

// ready to go
$(document).ready(function() {
  // $('#main-content').append('<p>Hello World!</p>');
  // let bus = {};
  // bus = _.extend(bus, Backbone.Events)

  // const quotes = new QuoteList(quoteData, {bus: bus, data: 'hello from options'});
  const movieList = new MovieList();
  // movieList.fetch();

  movieTemplate = _.template($('#movie-template').html());


  const mainView = new MainView({
    el: '#main-content',
    movieTemplate: movieTemplate,
    formTemplate: _.template($('#form-template').html()),
    movieList: movieList,
  });


});
