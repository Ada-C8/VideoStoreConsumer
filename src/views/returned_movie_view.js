import Backbone from 'backbone';
import Movie from '../models/movie';

const ReturnedMovieView = Backbone.View.extend({
  model: Movie,
});

export default ReturnedMovieView;
