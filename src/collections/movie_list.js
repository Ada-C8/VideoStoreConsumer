import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieList = Backbone.Collection.extend({
  urlRoot: 'http://localhost:3000/movies',
  // initialize(models, options){
  //   this.query = options.query
  // },
  url: function() {
    console.log("in URL function")
    if (this.query) {
      console.log("in IF!")
      return this.urlRoot + '/?query=' + this.query
    } else {
      console.log("in ELSE!");
      console.log(this.query);
      return this.urlRoot
    }
  },
  model: Movie,

});

export default MovieList;
