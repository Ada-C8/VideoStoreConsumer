import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieList = Backbone.Collection.extend({
  urlRoot: 'http://localhost:3000/movies',
  initialize(models, options){
    this.query = options.query
  },
  url: function() {
    if (this.query && this.query.length > 1) {
      return this.urlRoot + '/?query=' + this.query
    } else {
      return this.urlRoot
    }
  },
  model: Movie,

});

export default MovieList;
