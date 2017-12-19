import Backbone from 'backbone';
import Movie from '../models/movie';

const Library = Backbone.Collection.extend({
  model: Movie,
  url: 'http://localhost:3000/movies',
});

export default Library;
