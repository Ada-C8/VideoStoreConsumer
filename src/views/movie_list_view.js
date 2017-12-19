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
  this.listenTo(this.bus, 'addMovie', this.addMovie);
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

  addMovie(movie) {
    console.log('adding a new movie to rental library');
    console.log(this.model);
    this.model.add(movie);
    console.log('after adding');
    console.log(this.model);
  }

});

export default MovieListView;
