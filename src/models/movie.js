import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  defaults: {
    inventory: 0,
  },
  initialize(params) {
    this.title = params.title;
    this.attributes.upperCaseTitle = this.title.toUpperCase();
  },

});

export default Movie;
