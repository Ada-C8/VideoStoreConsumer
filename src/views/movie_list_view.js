import Backbone from 'backbone';
import _ from 'underscore';

import MovieView from '../views/movie_view';
// import OrderView from '../views/order_view';
// import Quote from '../models/quote';
import Movie from '../models/movie';

const MovieListView = Backbone.View.extend({
  initialize(params) {
  this.bus = params.bus;
  this.template = params.template;
  this.detailsTemplate = params.detailsTemplate;
  this.listenTo(this.model, 'update', this.render);
  },
  render() {
    this.$('#movies').empty();
    this.model.each((movie) => {
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        detailsTemplate: this.detailsTemplate,
        bus: this.bus,
        tagname: 'li',
        className: 'movie',
      });
      this.$('#movies').append(movieView.render().$el);
    });
  },

});

export default MovieListView;
