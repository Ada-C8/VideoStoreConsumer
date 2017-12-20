import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'change', this.render);
    this.inventoried = params.inInventory;
  },
  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    'click .btn-add': 'addToInventory'
  },

  addToInventory(e){
    e.preventDefault()
    this.trigger('addMeToYourRentalStore', this.model)
  }
});

export default MovieView;
