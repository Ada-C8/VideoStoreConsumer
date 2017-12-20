import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  // set the url so we can make a post request on a model
  url: 'http://localhost:3000/movies',

});

export default Movie
