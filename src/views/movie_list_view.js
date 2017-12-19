import Backbone from 'backbone';
import _ from 'underscore';
import Movie from '../models/movie';
import MovieView from '../views/movie_view';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.quoteList = params.quoteList;
    console.log('ORDERLIST VIEW FOR QUOTES');
    console.log(this.quoteList);
    this.listenTo(this.model, 'update', this.render);
  },
  render() {
    console.log('INSIDE MOVIE LIST VIEW RENDER');
    // Clear the unordered list
    this.$('#movies').empty();
    // Iterate through the list rendering each order
    this.model.forEach((movie) => {
      // Create a new OrderView with the model & template
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagName: 'li',
        className: 'movie',
      });
      // Then render the OrderView and append the resulting HTML to the DOM.
      this.$('#movies').append(movieView.render().$el);
    });
    return this;
  },
});

export default MovieListView;
