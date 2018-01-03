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
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  // events: {
  //   'click td': 'showModal',
  // },
  //
  // showModal() {
  //   console.log(this.model)
  //   this.$('.modal').removeClass('hide')
  // }



});

export default MovieView;
