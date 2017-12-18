// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import collections and views
import MovieList from 'collections/movie_list';
import MovieListView from 'views/movie_list_view';


let eventBus = {};
eventBus = _.extend(eventBus, Backbone.Events);

// ready to go
$(document).ready(function() {

  $('#show-rental-library').on('click', eventBus.trigger, 'showRentalLibrary');

});
