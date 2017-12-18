import Backbone from 'backbone';
import APIMovie from 'models/api_movie';
import StoreMovie from 'models/store_movie';
import StoreLibrary from 'collections/store_library';

const APIMovies = Backbone.Collection.extend({
  model: APIMovie,
  sync: function(method, model, options) {
      switch(method) {
        case 'read':
          options.url = 'http://localhost:3000/movies' + 'search' + params['query'];
          return Backbone.sync(method, model, options);
      }
    }
});

export default APIMovies;
