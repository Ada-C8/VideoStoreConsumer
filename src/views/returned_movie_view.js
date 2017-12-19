import Backbone from 'backbone';
import ReturnedMovie from '../models/returned_movie';

const ReturnedMovieView = Backbone.View.extend({
  model: ReturnedMovie,
});

export default ReturnedMovieView;
