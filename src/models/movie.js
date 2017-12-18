import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/movies',


  validate(attributes) {

  },

});


export default Movie;
