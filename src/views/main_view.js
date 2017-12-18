import Backbone from 'backbone';
import MovieView from './movie_view';
import Movie from '../models/movie';
import MovieListView from './movie_list_view';

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
      // bus: bus,
      template: this.movieTemplate,
    });

    movieListView.model.fetch();
  },
  renderAllMovies() {
  },
});




export default MainView;
