import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieList = Backbone.Collection.extend({
  default: {
    query: null
  },

  model: Movie,
  urlRoot: 'http://localhost:3000/movies',
  url: function() {
    console.log("in URL function")
    if (this.query) {
      console.log("in IF!")
      return this.urlRoot + '/query=' + this.query
    } else {
      console.log("in ELSE!");
      console.log(this);
      return this.urlRoot
    }
  },
});

export default MovieList;
