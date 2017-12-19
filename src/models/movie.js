import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  url: 'http://localhost:3000/movies',
});

export default Movie;
