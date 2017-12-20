import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  // urlRoot: function() {
  //   return `http://localhost:3000/movies?query=${this.get('query')}`
  // },

  validate(attributes) {
    const errors = {};

    if (!attributes.title) {
      errors['title'] = ["Movie Title is required"];
      console.log(errors)
    }
    if (!attributes.release_date) {
      errors['release date'] = ["Movie release date is required"];
      console.log(errors)
    }
    if ( Object.keys(errors).length > 0 ) {
      return errors;
    } else {
      return false;
    }
  },


});


export default Movie;
