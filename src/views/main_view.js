import Backbone from 'backbone';
import MovieView from './movie_view';
import Movie from '../models/movie';
import MovieListView from './movie_list_view';
import ExternalMovieList from '../collections/external_movie_list';

const MainView = Backbone.View.extend({
  initialize(params) {
    this.movieTemplate = params.movieTemplate;
    this.movieList = params.movieList;
  },
  events: {
    'click button#our-movies' : 'renderOurMovies',
    'click button#all-movies' : 'renderAllMovies'
  },
  renderOurMovies() {
    const movieListView = new MovieListView({
      el: '#movies-container',
      model: this.movieList,
      template: this.movieTemplate,
    });

    movieListView.model.fetch();
  },
  renderAllMovies() {
    this.search('Jaws');

  },

  search(title) {
    let externalMovieList = new ExternalMovieList({
      title: title
    });

    const movieListView = new MovieListView({
      el: '#movies-container',
      model: externalMovieList,
      template: this.movieTemplate,
    });

    movieListView.model.fetch();
  },
});




export default MainView;
