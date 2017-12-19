import Backbone from 'backbone';
import ReturnedMovie from '../models/returned_movie';

const ReturnedMovieView = Backbone.View.extend({
  model: ReturnedMovie,

  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
  },

  render() {
    console.log(this.model);
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
});

export default ReturnedMovieView;
