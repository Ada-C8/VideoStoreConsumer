import Backbone from 'backbone';
import StoreMovie from 'models/store_movie';

const StoreLibrary = Backbone.Collection.extend({
  model: StoreMovie,
  sync: function(method, model, options) {
      switch(method) {
        case 'read':
          options.url = 'http://localhost:3000/movies';
          return Backbone.sync(method, model, options);
      }
    }
});

export default StoreLibrary;
