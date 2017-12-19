import BackBone from 'backbone';
import SearchMovie from '../models/search_movie';

const SearchMovieList = Backbone.Collection.extend({
  // initialize(params) {
  //   this.searchTerm = params.searchTerm;
  // },

  model: SearchMovie,
  // urlRoot: `http://localhost:3000/movies?query=${this.get('searchTerm')}`,
  urlRoot: `http://localhost:3000/movies?query=${this.searchTerm}`,

});

export default SearchMovieList;
