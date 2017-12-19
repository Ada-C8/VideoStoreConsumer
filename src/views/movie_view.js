import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;

    this.bus = params.bus;
  },
  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    console.log(`the template is ${compiledTemplate}`);
    this.$el.html(compiledTemplate);
    return this;
  },
});

export default MovieView;
