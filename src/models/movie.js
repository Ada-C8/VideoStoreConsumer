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
  validates(attributes) {
    const errors = {};
    if(!attributes.title) {
      errors['title'] = ["cannot be blank"];
    }
    if(!attributes.release_date) {
      errors['release_date'] = ["cannot be blank"]
    }

    if (Object.keys(errors).length > 0) {
      return errors;
    }
    return false;
  },

});

export default Movie;
