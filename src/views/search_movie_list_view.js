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
    console.log(this.$('#search-movie-title').val());
    const searchMovieTitle = this.$('#search-movie-title').val();

    console.log(this.model);
    console.log(this.model.urlRoot);

    const fullUrl = this.model.urlRoot + searchMovieTitle
    console.log(fullUrl);
    console.log(this.model.searchMovieTitle);
    console.log(this.el);
    console.log(this.template);
    this.model.set({searchMovieTitle: searchMovieTitle});
    console.log(this.model.searchMovieTitle);
    this.model.fetch();

  },

  render() {

    return this;
  },
});

export default SearchMovieListView;
