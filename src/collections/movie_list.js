import Backbone from 'backbone';
import Movie from 'models/movie';

const MovieList = Backbone.Collection.extend({
  model: Movie,
  baseUrl: 'http://localhost:3000/movies',
  url() {
    return this.baseUrl
  }
});

export default MovieList;
