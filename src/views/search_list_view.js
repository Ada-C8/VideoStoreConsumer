import Backbone from 'backbone';
import SearchView from './search_view';
import Search from '../models/search';

const SearchListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;

    // this.listenTo(this.model, 'update', this.render);
    this.listenTo();
  },
  render() {
    this.$('ul').empty();

    this.model.forEach((search) => {
      const searchView = new SearchView({
        model: search,
        template: this.template,
        tagName: 'li',
        className: 'search',
      });
      console.log(search);
      this.$('ul').append(searchView.render().$el);
    });

    return this;
  },
});

export default SearchListView;
