import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  urlRoot: 'localhost:3000/movies',
  defaults: {
    inventory: 0,
  },

});

export default Movie;
