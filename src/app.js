import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

import Movie from 'models/movie';
import MovieList from 'collections/movie_list';
import MovieView from 'views/movie_view';
import MovieListView from 'views/movie_list_view';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';



let catalog = new MovieList();
// let database = new MovieList();

// ready to go
$(document).ready(function() {
  let data = catalog.fetch({
    success: function(response) {
      response.models.forEach((model) => {
        console.log(model.attributes);
      })
    }
  });

  console.log(data);
  console.log('heres catalog');
  console.log();
  $('#main-content').append('<p>Hello World!</p>');

  const $catalogTemplate = _.template($("#catalog-template").html());
  const catalogView = new MovieListView({
    model: catalog,
    template: $catalogTemplate,
    el: 'main',
  });


});
