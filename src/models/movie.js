import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  defaults: {
  },
  initialize(attributes) {
  },
  validate(attributes) {
  },
  urlRoot: `http://localhost:3000/movies/`,
  parse: function(response) {
    return response;
  },
  comparator: 'title',
});

export default Movie;
