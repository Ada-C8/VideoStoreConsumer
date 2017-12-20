import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/movies',
  defaults: {
    inventory: 0,
  },
  initialize(params) {
    this.title = params.title;
    // this.attributes.upperCaseTitle = this.title.toUpperCase();
  },

});

export default Movie;
