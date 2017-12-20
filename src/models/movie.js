import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  urlRoot:'http://localhost:3000/movies',

  parse(response) {
    return response
  },

  validate(attributes) {
    const errors = {};
    if (!attributes.title) {
      errors['title'] = "Title is required!";
    }

    if (!attributes.release_date) {
      errors['release_date'] = "Release date required!";
    }

    if (!attributes.hedwig) {
      errors['hedwig'] = "Must have a cat!";
    }

    if (Object.keys(errors).length > 0) {
      return errors;
    } else {
      return false;
    }
  },

});

export default Movie;
