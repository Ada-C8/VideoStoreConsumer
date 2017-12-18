import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieView = Backbone.View.extend({

  initialize(params) {
    this.template = params.template;
    // this.bus = params.bus;
    this.listenTo(this.model, 'change', this.render);
  },
  events: {
  },

  render() {
    let movie = this.model;
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    console.log(compiledTemplate);

    return this;
  },

});

export default MovieView;
