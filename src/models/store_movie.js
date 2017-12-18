import Backbone from 'backbone';

const StoreMovie = Backbone.Model.extend({

  sync: function(method, model, options) {
      switch(method) {
        case 'read':
          options.url = 'http://localhost:3000/movies' + model.get('title');
          return Backbone.sync(method, model, options);
      }
    }
  // idAttribute: 'title',
  // urlRoot: 'http://localhost:3000/movies',


});

export default StoreMovie;
