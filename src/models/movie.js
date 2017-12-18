import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/movies',
  defaults: {

  },
  initialize(attributes) {
  },
  validate(attributes) {
    // TODO: make custom validations
    // const errors = {};
    //
    // if (!attributes.task_name) {
    //   errors['task_name'] = ["Task name is required"];
    // }
    //
    // if ( Object.keys(errors).length > 0 ) {
    //   return errors;
    // } else {
    //   return false;
    // }
  },

});


export default Movie;
