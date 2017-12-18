import Backbone from 'backbone';
import LibMovie from '../models/lib_movie';

const LibMovieList = Backbone.Collection.extend({
  model: LibMovie,
  url: 'http://localhost:3000/movies/'
});

export default LibMovieList;
