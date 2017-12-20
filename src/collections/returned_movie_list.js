import Backbone from 'backbone';
import ReturnedMovie from '../models/returned_movie';

const returnedMovieList = Backbone.Collection.extend({
  model: ReturnedMovie,
  url: 'http://localhost:3000/movies/?query=',
  // parse: function(response) {
  //   let movie = {
  //     title: response['title'],
  //     overview: response['overview']
  //   }
  //   return movie
  // },
});



export default returnedMovieList;
