import Backbone from 'backbone';
import MovieView from './movie_view';
import Movie from '../models/movie';

const MovieListView = Backbone.View.extend({
  model: Movie,
  url: 'http://localhost:3000/movies',
  parse(response) {
    console.log(response);
    return response;
  },
  render() {

  },
});

export default MovieListView;
