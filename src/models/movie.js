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

  add(newMovie) {
    newMovie.save( {}, {
      success: (model, response) => {
        const movieSuccess = 'successfully added a movie!';
        console.log(movieSuccess);
        $('.display-status').html('');
        console.log(response);
        // $('.display-status').html(response.name + tripSuccess);
        // $('#add-trip-form').remove();
        // modalDisplay();
        // reportStatus('success', 'Successfully added reservation!');
      },
      error: (model, response) => {
        const movieFailure = 'Failed to save movie! Server response:';
        // console.log(`validationError ${response.attributes['validationError']}`);
        // $('.display-status').html('')
        console.log(response.errors);
        // $('.display-status').html(tripFailure);
        // modalDisplay();
      },
    });
  },

});


export default Movie;
