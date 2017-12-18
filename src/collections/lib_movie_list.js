import Backbone from 'backbone';
import LibMovie from '../models/lib_movie';

const LibMovieList = Backbone.Collection.extend({
  model: LibMovie,
})

export default LibMovieList;
