import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

import StoreLibrary from 'collections/store_library';
import StoreMovie from 'models/store_movie';


$(document).ready(function() {
  let libraryTemplate = _.template($('#store-movie-template').html());

  const storeLibrary = new StoreLibrary();
  storeLibrary.fetch();

  console.log(storeLibrary.attributes);

  storeLibrary.attributes.forEach((storeMovie) => {
    $('#store-library').append(libraryTemplate(storeMovie.attributes));
  });



});
