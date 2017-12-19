import BackBone from 'backbone';
import SearchMovie from '../models/search_movie';

const SearchMovieList = Backbone.Collection.extend({
  // defaults: {
  //   'searchMovieTitle': null,
  // },
  url: 'http://localhost:3000/movies?query=',
  model: SearchMovie,
  // urlRoot: `http://localhost:3000/movies?query=${this.get('searchTerm')}`,
  // urlRoot: `http://localhost:3000/movies?query=Jaws`
  // + this.get('searchMovieTitle'),

});

export default SearchMovieList;
