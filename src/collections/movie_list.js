import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieList = Backbone.Collection.extend({
  model: Movie,
  url: 'http://localhost:3000/movies',
  parse: function(response){
    return response['responseJSON'];
  }
});

export default MovieList;
