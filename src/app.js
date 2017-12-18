import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

import StoreLibrary from 'collections/store_library';
import StoreMovie from 'models/store_movie';

import StoreLibraryView from 'views/store_library_view';
import StoreMovieView from 'views/store_movie_view';


$(document).ready(function() {

  const storeLibrary = new StoreLibrary();
  storeLibrary.fetch();

  const storeLibraryView = new StoreLibraryView({
    model: storeLibrary,
    template: _.template($('#store-movie-template').html()),
    el: 'main'
  });
  storeLibraryView.render();

  // console.log(storeLibrary.attributes);
  //
  // storeLibrary.attributes.forEach((storeMovie) => {
  //   $('#store-library').append(libraryTemplate(storeMovie.attributes));
  // });



});
