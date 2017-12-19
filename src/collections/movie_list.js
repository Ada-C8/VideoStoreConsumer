import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieList = Backbone.Collection.extend({
  model: Movie,
  urlRoot: 'http://localhost:3000/movies',
  url: function(query) {
    console.log("in URL function")
    if (query) {
      console.log("in IF!")
      return this.urlRoot + '/query=' + this.query
    } else {
      console.log("in ELSE!")
      return this.urlRoot
    }
  }
});

export default MovieList;
