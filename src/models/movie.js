import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/movies'
  // sync: function(method, model, options) {
  //   options.url = 'http://localhost:3000/movies';
  //   //Backbone.emulateHTTP = true;
  //   return Backbone.sync('create', model, options);
  // }
})


export default Movie
