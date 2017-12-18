import Backbone from 'backbone';
import Movie from 'models/model';

const MovieList = Backbone.Collection.extend({
  model: Movie,
});

export default MovieList;
