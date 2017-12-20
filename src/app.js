// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';
import 'foundation-sites/dist/css/foundation.css';

// collections
import MovieList from './collections/movie_list';

// views
import MovieListView from './views/movie_list_view';

import './css/_settings.css';
import './css/styles.css';

// ready to go
$(document).ready(function() {
  const movies = new MovieList();
  const movieListView = new MovieListView({
    model: movies,
    template: _.template($('#movie-template').html()),
    searchTemplate: _.template($('#search-template').html()),
    el: ('#main-content')
  });

  movies.fetch();
});
