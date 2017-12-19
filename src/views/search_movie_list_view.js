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
    console.log(event.currentTarget.children[1]);
    const element = event.currentTarget.children[1];
    console.log(this.$('#search-movie-title').val());
  },

  render() {

    return this;
  },
});

export default SearchMovieListView;
