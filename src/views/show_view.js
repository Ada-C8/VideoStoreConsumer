import Backbone from 'backbone';
import Movie from '../models/movie';

const ShowView = Backbone.View.extend({
  initialize(params) {
    this.bus = params.bus;
    this.template = params.template;
    this.listenTo(this.bus, 'addToCollection', this.render);
  },

  render(movieData) {
    this.$el.html('');
    const compiledTemplate = this.template(movieData);
    this.$el.html(compiledTemplate);
  },
});

export default ShowView;
