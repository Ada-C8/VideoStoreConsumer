import Backbone from 'backbone';

const StoreMovie = Backbone.Model.extend({
  validate(attributes) {
    const errors = {};
    if (!attributes.title) {
      errors['title'] = ['You need a movie with a title.'];
    }
    if ( Object.keys(errors).length > 0 ) {
      return errors;
    } else {
      return false;
    }
  },
  sync: function(method, model, options) {
    switch(method) {
      case 'read':
      options.url = 'http://localhost:3000/movies' + model.get('title');
      return Backbone.sync(method, model, options);
      case 'create':
      options.url = 'http://localhost:3000/movies';
      return Backbone.sync(method, model, options);
    }
  }
});

export default StoreMovie;
