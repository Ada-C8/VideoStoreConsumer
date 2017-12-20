import Backbone from 'backbone';
import _ from 'underscore';
import Movie from '../models/movie';
import MovieView from '../views/movie_view';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
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
    'click button.btn-rental-lib': 'viewMovies',
  },
  searchMovies: function(event) {
    event.preventDefault();
    this.$('.movies-container h2').html('Results');
    this.$('#results-container').show();

    const query = this.$('input[name=movie-query]').val();
    this.model.search(query);
  },
  viewMovies: function(event) {
    this.$('.movies-container h2').html('Rental Library Movies');
    this.model.viewRentalMovies();
  },
});

export default MovieListView;
