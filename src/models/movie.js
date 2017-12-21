import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/movies',
  validate(attributes) {
    // title:
    // overview:
    // release_date:
    // image_url:
    // external_id:
  },

});

export default Movie;
