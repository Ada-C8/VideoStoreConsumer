import Backbone from 'backbone';
import Movie from '../models/movie';

const ShowView = Backbone.View.extend({
  initialize(params) {
    this.collection = params.collection;
    this.bus = params.bus;
    this.template = params.template;
    this.model;

    this.listenTo(this.bus, 'addToCollection', this.render);
    this.listenTo(this.collection, 'update', this.render);
  },

  render(movieData) {
    this.$el.html('');
    const compiledTemplate = this.template(movieData.attributes);
    this.$el.html(compiledTemplate);
    this.model = movieData;
  },

  events: {
    'click button.add-collection': 'addtoLibrary'
  },

  addtoLibrary() {
    let saved = this.model.save();
    if (saved) {
      this.collection.add(this.model);
      let theButton = this.$('button.add-collection');
      this.model.set('inInventory', true);
    }
  }
});

export default ShowView;
