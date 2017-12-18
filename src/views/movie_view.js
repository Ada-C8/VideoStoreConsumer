import Backbone from 'backbone';
import Movie from 'models/model';

const MovieView = Backbone.View.extend({
  initialize(params){
    this.template = params.template;
  },
});
 export default MovieView;
