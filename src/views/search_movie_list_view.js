import BackBone from 'backbone';
import SearchMovie from '../models/search_movie';
import SearchMovieView from './search_movie_view';

const SearchMovieListView = BackBone.View.extend({

  initialize(params) {
    this.template = params.template;

  },

  events: {
    'submit': 'searchMovies',
  },

  searchMovies(event){
    event.preventDefault();
    console.log('In searchMovies');
  },

  render() {

    return this;
  },
});

export default SearchMovieListView;
