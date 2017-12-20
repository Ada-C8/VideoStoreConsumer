import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  initialize(attributes){
    this.title = attributes.title,
    this.overview = attributes.overview,
    this.release_date = attributes.release_date,
    this.image_url = attributes.image_url,
    this.bus = attributes.bus,
    this.url = 'http://localhost:3000/movies'
  },
  validate(attributes){
    const errors = {}

    if (!attributes.title) {
      errors['title'] = 'The title can not be blank';
    }

    if (!attributes.overview) {
      errors['overview'] = 'The overview can not be blank';
    }

    if (!attributes.release_date) {
      errors['release_date'] = 'The release date can not be blank';
    }

    if (!attributes.image_url) {
      errors['image_url'] = 'The image url can not be blank';
    }

    if ( Object.keys(errors).length > 0 ) {
      return errors;
    } else {
      return false;
    }
  },
});

export default Movie;
