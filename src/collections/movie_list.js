import Backbone from 'backbone';

import Movie from 'models/movie';

const MovieList = Backbone.Collection.extend({
  model: Movie,
  url: 'http://localhost:3000/movies',
  initialize(params) {
    this.bus = params.bus;

    this.listenTo(this.bus, 'addToLibrary', this.addToLibrary);
  },
  parse(response) {
    return response;
  },

  addToLibrary(movie) {
    if (!this.contains(movie)){
      const result = this.create(movie);
        this.bus.trigger('updateStatus', result);
    }
  },

  contains(movie) {
    for (let i = 0; i < this.models.length; i += 1) {
      const model = this.models[i];

      if (model.get('title') === movie.get('title') &&
    model.get('release_date') === movie.get('release_date')) {
        return true;
      }
    }
    return false;
  },

  findWhereIgnoreCase(key, val) {
    return this.filter(function(item) {
      return item.get(key).toLowerCase() === val.toLowerCase();
    });
  },

});

export default MovieList;
