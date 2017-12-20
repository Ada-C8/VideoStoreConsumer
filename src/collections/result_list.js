import Backbone from 'backbone';
import Movie from '../models/movie';

const ResultList = Backbone.Collection.extend({
  model: Movie,
  sync: function(method, model, options) {
    options.url = 'http://localhost:3000/movies/search?query=' + this.query;
    return Backbone.sync('read', model, options);
  }
});

export default ResultList;
