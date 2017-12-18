import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  initialize(params) {
    this.title = params.title;
    this.image_url = params.image_url;
    this.bus = params.bus;
  },
});

export default Movie;
