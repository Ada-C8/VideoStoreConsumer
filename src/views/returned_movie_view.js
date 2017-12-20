import Backbone from 'backbone';
import ReturnedMovie from '../models/returned_movie';
import $ from 'jquery';

const ReturnedMovieView = Backbone.View.extend({
  model: ReturnedMovie,

  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
  },
  events: {
    'click': 'sendMovieData'
  },
  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  sendMovieData: function(){
    this.bus.trigger('addMovie', this.model.attributes);
  },
});

export default ReturnedMovieView;
