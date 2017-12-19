import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
  }
});

export default MovieView
