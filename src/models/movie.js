import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/movies',
  defaults: {

  },
  initialize(attributes) {
  },
  validate(attributes) {

    const errors = {};
    const title = this.get('title');
    const releaseDate = this.get('release_date');

    console.log(title);
    console.log(`release date is ${releaseDate}`);

    if (!title) {
      console.log("Cannot add a movie without a name");
      errors['title'] = ["Cannot add a movie without a name"];
    }

    if (!releaseDate) {
      errors['releaseDate'] = ["Cannot add a move that does not have a release date"];
    }

    if ( Object.keys(errors).length > 0 ) {
      return errors;
    } else {
      return false;
    }
  },

  add(newMovie) {
    if(!newMovie.isValid()){
      $('.display-status').html('')
      $('.display-status').html(`${newMovie.errors}`);
      // modalDisplay();
    } else {
      newMovie.save( {}, {
        success: (model, response) => {
          const movieSuccess = `successfully added ${this.get('title')}!`;
          console.log(movieSuccess);
          $('.display-status').html('');
          console.log(response);
          $('.display-status').html(movieSuccess);
          // $('#add-trip-form').remove();
          // modalDisplay();
          // reportStatus('success', 'Successfully added reservation!');
        },
        error: (model, response) => {
          const movieFailure = 'Failed to save movie! Server response:';
          // console.log(`validationError ${response.attributes['validationError']}`);
          $('.display-status').html('')
          console.log(response.errors);
          $('.display-status').html(movieFailure);

          // modalDisplay();
        },
      });
    }
  },

});


export default Movie;
