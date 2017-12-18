import Backbone from 'backbone';
import Movie from 'models/movie';

const MovieList = Backbone.Collection.extend({
  model: Movie,
  url: 'localhost:3000/movies',
  parse(response) {
    response.forEach(function(movieAttrs) {
      if (movieAttrs.inventory == null) {
        movieAttrs.inventory = 0;
      }
    })
  }
});

export default MovieList;
