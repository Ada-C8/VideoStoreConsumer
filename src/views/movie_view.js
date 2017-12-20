import Backbone from 'backbone';
import Movie from 'models/movie';

const MovieView = Backbone.View.extend({
  initialize(params){
    this.template = params.template;
  },

  render(){
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    'click button.btn-add': 'add',
  },

  add(event) {
    const movieList = this.model.save();
  }
});
 export default MovieView;
