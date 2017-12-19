import Backbone from 'backbone';


const Movie = Backbone.Model.extend({
  initialize(attributes) {
    this.title = this.attributes.title;
    this.attributes.upperCaseTitle = this.title.toUpperCase();
  },
  validate(attributes) {
    const errors = {};

    if (!attributes.title) {
      errors['title'] = ['Title is required'];
    }
  }
});

export default Movie;
