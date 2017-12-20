import Backbone from 'backbone';
import ReturnedMovie from '../models/returned_movie';
import ReturnedMovieView from '../views/returned_movie_view';
import Movie from '../models/movie';
import $ from 'jquery';

const ReturnedMovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
    this.listenTo(this.bus, 'addMovie', this.addMovie);
  },
  events: {
    'click form #search-btn': 'matchingMovies'
  },
  addMovie(movie){
    const newMovie = new ReturnedMovie(movie);
    if (newMovie.isValid()) {
      newMovie.save({}, {
        success: (model, response) => {
          this.$('#success-movie-add').append(`<p>Added ${newMovie.get('title')} to Your Rentals!</p>`);
          this.bus.trigger('addToCollection', newMovie);
        },
        error: (model, response) => {
          this.$('#returned-movies-errors').append('<p>There was something wrong with your request!</p>')
        }
      });
    }
  },
  matchingMovies(event) {
    event.preventDefault();
    this.$('#matching-movies').empty();

    const movieTitle = this.getFormData();
    this.clearFormData();

    // Set URL
    this.model.url += movieTitle.title;

    const results = this.model.fetch({
      success: (model, response) => {
        response.forEach((movieData) => {
          let newMovie = new ReturnedMovie(movieData);

          if (newMovie.isValid()) {
            let returnedMovieView = new ReturnedMovieView({
              tagName: 'tr',
              template: this.template,
              model: newMovie,
              bus: this.bus,
            });
            this.$('#matching-movies').append(returnedMovieView.render().$el);
          }
        });
      },
      error: (model, response) => {
        this.$('#returned-movies-errors').append('<p>There was something wrong with your request!</p>')
      }
    });
    // Reset URL
    this.model.url = 'http://localhost:3000/movies/?query=';
  },

  getFormData() {
    const data = {};
    data['title'] = this.$('form input[name=title]').val();
    return data;
  },

  clearFormData() {
    this.$('form input[name=title]').val('');
  },
}); // ReturnedMovieListView

export default ReturnedMovieListView;
