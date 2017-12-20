import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieList = Backbone.Collection.extend({
  urlRoot: 'http://localhost:3000/movies',
  initialize(models, options){
    this.query = options.query
  },
  url: function() {
    if (this.query) {
      return this.urlRoot + '/?query=' + this.query
    } else {
      return this.urlRoot
    }
  },
  model: Movie,

});

export default MovieList;
