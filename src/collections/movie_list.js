import Backbone from 'backbone';

import Movie from '../models/movie';

const MovieList = Backbone.Collection.extend({
  model: Movie,
  url: 'http://localhost:3000/movies',
  comparator: 'title',

  validate(attributes) {
  },

});


export default MovieList;
