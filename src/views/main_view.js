import Backbone from 'backbone';
import MovieView from './movie_view';
import Movie from '../models/movie';
import MovieListView from './movie_list_view';
import ExternalMovieList from '../collections/external_movie_list';

const MainView = Backbone.View.extend({
  initialize(params) {
    this.movieTemplate = params.movieTemplate;
    this.formTemplate = params.formTemplate;
    this.movieList = params.movieList;
  },
  events: {
    'click button#our-movies' : 'renderOurMovies',
    'click button#all-movies' : 'renderForm',
    'click button#submit' : 'renderAllMovies',
  },
  renderOurMovies() {
    this.$('#search-form').html('');
    this.$('#movies-list').empty();

    const movieListView = new MovieListView({
      el: '#movies-container',
      model: this.movieList,
      template: this.movieTemplate,
    });

    movieListView.model.fetch();
  },
  renderForm() {
    this.$('#movies-list').empty();
    this.$('#search-form').html(this.formTemplate);
  },
  renderAllMovies(event) {
    event.preventDefault();
    const title = this.$('form input').val();
    this.$('#movies-list').html('<h3> Searching...</h3>');
    this.search(title);

  },

  search(title) {
    let externalMovieList = new ExternalMovieList({
      title: title
    });

    // this.$('#movies-list').empty();
    const movieListView = new MovieListView({
      el: '#movies-container',
      model: externalMovieList,
      template: this.movieTemplate,
      external: true
    });

    movieListView.model.fetch();
  },
});




export default MainView;
