import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

// Import models and collections
import Movie from 'models/movie'
import MovieList from 'collections/movie_list'

// ready to go
$(document).ready(function() {

const movieTemplate = _.template($('#all-movies-template').html());



});
