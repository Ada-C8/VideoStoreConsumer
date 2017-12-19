import BackBone from 'backbone';
import SearchMovie from '../models/search_movie';
import SearchMovieView from './search_movie_view';

const SearchMovieListView = BackBone.View.extend({

  initialize(params) {
    this.template = params.template;

  },

  events: {
    'click input #submit': 'searchMovies',
  },

  searchMovies(event){
    event.preventDeault();
    console.log('In searchMovies');
  },

  render() {

    return this;
  },
});

export default SearchMovieListView;
