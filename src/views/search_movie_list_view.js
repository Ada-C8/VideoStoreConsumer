import BackBone from 'backbone';
import SearchMovie from '../models/search_movie';
import SearchMovieView from './search_movie_view';

const SearchMovieListView = BackBone.View.extend({

  initialize(params) {
    this.template = params.template;

    this.listenTo(this.model, 'update', this.render);
  },

  events: {
    'submit': 'searchMovies',
  },

  searchMovies(event){
    event.preventDefault();
    const baseURL = '`http://localhost:3000/movies?query=';
    console.log('In searchMovies');
    console.log(this.$('#search-movie-title').val());
    const searchMovieTitle = this.$('#search-movie-title').val();

    // TODO: make sure we think about reseting url in the base of multiple searches, also do we need to change user input search term if there are spaces?
    console.log(this.model);

    this.model.url += searchMovieTitle;

    this.model.fetch().then(function(response){
      console.log(response);

    });
    console.log(this.model.url);
  },

  render() {
    console.log('inside search_movie_list_view render function');

    this.$('#search-movies').empty();

    this.model.each((searchMovie) => {
      const searchMovieView = new SearchMovieView({
        model: searchMovie,
        template: this.template,
        tagName: 'p',
        className: 'search-movie',
      });
      this.$('#search-movies').append(searchMovieView.render().$el);
    });
    return this;
  },
});

export default SearchMovieListView;
