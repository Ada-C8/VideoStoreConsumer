import BackBone from 'backbone';
import SearchMovie from '../models/search_movie';

const SearchMovieList = Backbone.Collection.extend({
  model: SearchMovie,
  urlRoot: `http://localhost:3000/movies/search?query=${this.get('search_term')}`,
});

export default SearchMovieList;
