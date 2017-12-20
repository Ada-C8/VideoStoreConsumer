import Backbone from 'backbone';
import ReturnedMovie from '../models/returned_movie';
import $ from 'jquery';

const ReturnedMovieView = Backbone.View.extend({
  tagName: 'button',
  events: {
    'click': 'sendMovieData'
  },
  sendMovieData: function(){
    this.bus.trigger('addMovie', this.model.attributes);
  },
  model: ReturnedMovie,

  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
  },

  render() {
    console.log(this.model);
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    console.log($('#current-rentals-view').html());
    return this;
  },
});

export default ReturnedMovieView;
