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



// let database = new MovieList();
let catalog = new MovieList();

// ready to go
$(document).ready(function() {
  catalog.fetch({
    success: function(response) {
      response.models.forEach((model) => {
        model.attributes.models
      })
    }
  });
  console.log(catalog);

  const $catalogTemplate = _.template($("#catalog-template").html());
  const catalogView = new MovieListView({
    model: catalog,
    template: $catalogTemplate,
    el: 'main',
  });


});
