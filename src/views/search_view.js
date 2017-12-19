import Backbone from 'backbone';
import Search from '../models/search';

const SearchView = Backbone.View.extend({

  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'change', this.render);
  },
  events: {
  },

  render() {
    let search = this.model;
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);

    return this;
  },

});

export default SearchView;
