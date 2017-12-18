import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieList = Backbone.Collection.extend({
  model: Movie,
  url: function() {
    console.log("building URL...");
    return 'http://localhost:3000/movies/' + this.query;
  },

  initialize(params) {
    if (params){
      this.query = params.query ? `/search?query=${params.query}` : '';
    } else {
      this.query = '';
    }
  },
});

export default MovieList;
