import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

import Movie from 'models/movie';
import MovieList from 'collections/movie_list';
import MovieView from 'views/movie_view';
import MovieListView from 'views/movie_list_view';
import DatabaseListView from 'views/database_list_view'

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';



// let database = new MovieList();
let catalog = new MovieList([], {});


const $catalogTemplate = _.template($("#catalog-template").html());
const $databaseTemplate = _.template($("#database-template").html());

// ready to go
$(document).ready(function() {
  catalog.fetch({
    success: function(response) {
      response.models.forEach((model) => {
        model.attributes.models
      })
    }
  });

  const catalogView = new MovieListView({
    model: catalog,
    template: $catalogTemplate,
    el: 'main',
    specifyTemp: "catalog"
  });



  $('.btn-query').click(function(event){
    event.preventDefault();
    console.log('submit button was clicked');
    let query = $(`[name='query']`).val();
    let database = new MovieList([], {
      query: query,
    });

    let databaseView = new DatabaseListView({
      model: database,
      template: $databaseTemplate,
      el: 'main',
      availableInventory: catalog
    });

    database.fetch();
  });



});
