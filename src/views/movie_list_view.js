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
        className: 'movie',
      });
      console.log('MAKING MOVIE VIEWS');
      // Then render the OrderView and append the resulting HTML to the DOM.
      this.$('#movies').append(movieView.render().$el);
    });
    return this;
  },
  events: {
    'click button.btn-search': 'searchMovies',
  },
  searchMovies: function(event) {
    event.preventDefault();
    console.log('IN searchMovies');
    console.log(this);

    const query = this.$('input[name=movie-query]').val();
    this.model.search(query);
  },

});

export default MovieListView;
