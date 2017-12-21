import Backbone from 'backbone';
import _ from 'underscore';
import Movie from '../models/movie';
import MovieView from '../views/movie_view';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.detailsTemplate = params.detailsTemplate;
    this.model = params.model;
    this.listenTo(this.model, 'update', this.render);
  },
  render() {
    console.log('INSIDE MOVIE LIST VIEW RENDER');
    console.log(this.model);
    // Clear the unordered list
    this.$('#movies').empty();
    // Iterate through the list rendering each order
    this.model.each((movie) => {
      // Create a new view with the model & template
      const movieView = new MovieView({
        model: movie,
        detailsTemplate: this.detailsTemplate,
        template: this.template,
        tagName: 'li',
        className: 'movie row',
      });
      console.log('MAKING MOVIE VIEWS');
      // Then render the MovieView and append the resulting HTML to the DOM.

      this.$('#movies').prepend(movieView.render().$el);
    });
    return this;
  },
  events: {
    'click button.btn-search': 'searchMovies',
    'click .btn-rental-lib': 'viewMovies',
    'click button.btn-movie-details': 'hideRentalsLibrary',
    'click button.btn-all-movies': 'showRentalsLibrary',
  },
  searchMovies: function(event) {
    event.preventDefault();
    this.$('.movies-container h2').html('Results');
    this.$('#movie-details-container').hide();
    this.$('#movies-container').show();
    console.log('***INSIDE MOVIE LIST VIEW: searchMovies');
    const query = this.$('input[name=movie-query]').val();
    this.model.search(query);
  },
  viewMovies: function(event) {
    this.$('.movies-container h2').html('Rental Library Movies');
    this.model.viewRentalMovies();
    this.$('.movies-container').show();
    this.$('#movie-details-container').hide();
  },
  hideRentalsLibrary: function(event) {
    this.$('.movies-container').hide();
    this.$('#movie-details-container').show();
  },
  showRentalsLibrary: function(event) {
    console.log('in the Movie List View showRentalsLibrary function');
    this.$('.movies-container').show();
  }
});

export default MovieListView;
