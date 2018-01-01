import Backbone from 'backbone';
import Movie from 'models/movie';

const MovieList = Backbone.Collection.extend({
  model: Movie,
  url: 'http://localhost:3000/movies',
  search(query) {
    this.url = `http://localhost:3000/movies?query=${query}`
    this.fetch();
  },
  viewRentalMovies() {
    this.url = 'http://localhost:3000/movies';
    this.fetch();
  },
});

export default MovieList;
