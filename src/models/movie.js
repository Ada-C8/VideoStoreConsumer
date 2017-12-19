import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  urlRoot: function() {
    return `http://localhost:3000/movies?query=${this.get('query')}`
  },

  validate(attributes) {

  },

});


export default Movie;
