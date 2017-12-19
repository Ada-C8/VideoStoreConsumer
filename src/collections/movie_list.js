import Backbone from 'backbone';
import Movie from 'models/movie';

const MovieList = Backbone.Collection.extend({
  model: Movie,
  url: 'http://localhost:3000/movies',
  search(query) {
    // this.url = `http://localhost:3000/movies/search?query=${query}`
    console.log('INSIDE MOVIELIST search method');
    this.url = `http://localhost:3000/movies?query=${query}`
    this.fetch();
  },
});

export default MovieList;
