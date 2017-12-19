import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieSearch = Backbone.Collection.extend({
  model: Movie,
  url: `http://localhost:3000/movies?query=${this.get('search_term')}`,

});

export default MovieSearch;
