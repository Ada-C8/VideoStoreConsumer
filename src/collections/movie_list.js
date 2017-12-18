import Backbone from 'backbone';
import Movie from 'models/movie';

const MovieList = Backbone.Collection.extend({
  model: Movie,
  url: 'http://localhost:3000/movies/',
  baseUrl: 'http://localhost:3000/movies/search?query=',
  resetUrl(query) {
    this.url = this.baseUrl + query;
  },
});

export default MovieList;
