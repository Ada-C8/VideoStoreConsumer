import Backbone from 'backbone';
import Movie from '../models/model';
import MovieView from './movie_view';

const MovieListView = Backbone.View.extend({
  initialize(params){
    this.template = params.template;
  },
});
 export default MovieListView;
