import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieList = Backbone.Collection.extend({
  model: Movie,
  url: 'http://localhost:3000/movies',

  //TODO: put in correct comparator // I don't think we need this
  comparator: 'title',

  fetchSearch: function (query, options) {
    options = options || {};

    options.data = {query: query['query']}

    return this.fetch(options);

  },
});

export default MovieList;
