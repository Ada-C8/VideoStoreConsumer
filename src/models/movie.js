import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  urlRoot:'http://localhost:3000/movies',

  parse(response) {
    return response
  },
});

export default Movie;
