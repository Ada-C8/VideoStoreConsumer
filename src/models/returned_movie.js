import Backbone from 'backbone';

const returnedMovie = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/movies',

  initalize(attributes){
    this.bus = attributes.bus;
    this.title = attributes.title,
    this.overview = attributes.overview,
    this.release_date = attributes.release_date,
    this.image_url = attributes.image_url
  },
  validate(attributes){
    const errors = {}

    if (!attributes.title){
      errors['title'] = 'The title can not be blank';
    }

    if (!attributes.overview){
      errors['title'] = 'The overview can not be blank';
    }

    if (!attributes.release_date){
      errors['title'] = 'The release date can not be blank';
    }

    if (!attributes.image_url){
      errors['title'] = 'The image url can not be blank';
    }
  },
});

export default returnedMovie;
