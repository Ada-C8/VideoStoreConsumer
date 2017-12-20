import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.model = params.model;
    this.bus = params.bus;
  },
  render() {
    const compileTemplate = this.template(this.model.toJSON());
    this.$el.html(compileTemplate);
    return this;
  },
  addInventory(event) {
    this.model.save({}, {
      success: (model, response) => {
        console.log('success');
      },
      error: (model, response) => {
        console.log('error');
      }
    })
  },
  events: {
    'click .add-inventory': 'addInventory'
  },

});

export default MovieView;
