import Backbone from 'backbone';


const Movie = Backbone.Model.extend({
  initialize(attributes) {
  },
  validate(attributes) {
    const errors = {};

    if (!attributes.title) {
      errors['title'] = ['Title is required'];
    }
  }
});

export default Movie;
