import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
  }, // initialize
  render() {
    console.log('in MovieView render');

    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate)

    return this;
  }, // render
}) // MovieView

export default MovieView;
