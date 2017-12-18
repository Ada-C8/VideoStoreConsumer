import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  initialize(params) {
    this.title = params.title;
    this.bus = params.bus;
  },
});

export default Movie;
