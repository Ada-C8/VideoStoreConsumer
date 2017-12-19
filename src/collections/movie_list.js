import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieList = Backbone.Collection.extend({
  model: Movie,
  url: 'http://localhost:3000/movies',
  // parse: function(response){
  //   console.log(response);
  //   console.log('response');
  //   return response;
  // },
  //TODO: put in correct comparator
  comparator: 'title',

  fetchSearch: function (query, options) {
    options = options || {};
    $('#header').html('');
    $('#header').append(query);
    // debugger
    // if (options.url === undefined) {
    //
    //   options.url = this.url + "?query=" + query['query']
    // }
    options.data = {query: query['query']}
  
    return this.fetch(options)
      // return Backbone.Model.prototype.fetch.call(this, options);
  },
});

export default MovieList;
