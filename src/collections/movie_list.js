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

});

export default MovieList;
