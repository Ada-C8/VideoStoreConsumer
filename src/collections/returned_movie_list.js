import Backbone from 'backbone';
import ReturnedMovie from '../models/returned_movie';

const returnedMovieList = Backbone.Collection.extend({
  model: ReturnedMovie,
  url: 'http://localhost:3000/movies/?query=',
});



export default returnedMovieList;
