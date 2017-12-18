import Backbone from 'backbone';
import Movie from 'models/movie';

const ExternalMovieList = Backbone.Collection.extend({
  initialize (attributes) {
    this.title = attributes.title;
  },
  model: Movie,
  url() {
    return `http://localhost:3000/movies/?query=${ this.title }`
  },

});

export default ExternalMovieList;
