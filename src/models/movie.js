import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  defaults: {
    inInventory: true,
    image_url: ''
  },
  url: `http://localhost:3000/movies/`,
  parse: function(response) {
    return response;
  },
  comparator: 'title',
});

export default Movie;
