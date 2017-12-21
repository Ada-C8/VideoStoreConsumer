import Backbone from 'backbone';
import Movie from '../models/movie';
import MovieList from '../collections/movie_list';
import MovieView from '../views/movie_view';
import ReturnedMovieView from '../views/returned_movie_view';
import $ from 'jquery';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
    this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.bus, 'addMovie', this.addToCollection);

    // this.listenTo(this.bus, 'addToCollection', this.addToCollection);
  },
  render() {
    this.$('#movie-list').empty();

    const lastMovie = this.model.at(this.model.length -1);
    const movieView = new MovieView({
      tagName: 'tr',
      template: this.template,
      model: lastMovie,
      bus: this.bus,
    });

    this.$('#movies-in-store').append(movieView.render().$el);
    return this;
  },
  addToCollection(attributes) {
    const newMovie = new Movie(attributes);
    if (newMovie.isValid()) {
      const movieView = new MovieView({
        tagName: 'tr',
        template: this.template,
        model: newMovie,
        bus: this.bus
      });
      this.$('#movies-in-store').prepend(movieView.render().$el);
    } else {
      this.displayOrderErrors(this.validationError);
    }
  },
  displayOrderErrors(errors) {
    const $errorDisplay = this.$('#available-movies-errors');
    $errorDisplay.empty();

    Object.keys(errors).forEach((key) => {
      $errorDisplay.append(`<p>${errors[key]}</p>`);
    });
  },
}); // MovieListView


export default MovieListView;
