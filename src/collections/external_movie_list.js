import Backbone from 'backbone';
import Movie from 'models/movie';

const ExternalMovieList = Backbone.Collection.extend({
  model: Movie,
  urlRoot: `http://localhost:3000/movies/?query=${ this.title }`,
});

export default ExternalMovieList;
