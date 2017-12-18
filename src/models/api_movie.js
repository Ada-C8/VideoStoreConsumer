import Backbone from 'backbone';

import APIMovies from 'collections/api_movies';

const APIMovie = Backbone.Model.extend({

  sync: function(method, model, options) {
      // switch(method) {
      //   case 'read':
      //     options.url = 'http://localhost:3000/movies' + model.get('title');
      //     return Backbone.sync(method, model, options);
      // }
    }
  // idAttribute: 'title',
  // urlRoot: 'http://localhost:3000/movies',


});

export default APIMovie;
