import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  url: function() {
    return 'http://localhost:3000/movies/' + this.get('title');
  },
});

export default Movie;
