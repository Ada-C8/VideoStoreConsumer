import Backbone from 'backbone';
import Movie from '../models/task';

const MovieList = Backbone.Collection.extend({
  model: Movie,
  url: 'https://localhost:3000/',
  //TODO: put in correct comparator
  // comparator: 'name',
});

export default MovieList;
