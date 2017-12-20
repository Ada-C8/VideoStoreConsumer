import Backbone from 'backbone';
import SearchView from '../views/search_view'
import SearchList from '../collections/search_list'


import Search from '../models/search';

const SearchListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
    this.bus = params.bus
  },
  render() {
    this.$('#search-list').empty();
    this.model.each((search) => {
      console.log('in Search List View render');
      const searchView = new SearchView({
        model: search,
        template: this.template,
        tagName: 'tr',
        className: 'search',
        bus: this.bus,
      });
      this.$('#search-list').append(searchView.render().$el);
    });
    return this;
  },

  events: {
    'click button.btn-search-api': 'searchApi',
  },

  getFormData() {
    console.log("I am reading the form")
    const formData = {};
    const title = this.$('.movie-entry-form input[name=title]').val();
    this.$('.movie-entry-form input[name=title]').val('')
    // formData['title'] = title;
    return title;
  },

  searchApi() {
    //this is an ugly way to reset the URL.  See if we can fix it
    event.preventDefault();
    const title = this.getFormData()
    this.model.url += title;
    console.log(this.model.url);
    this.model.fetch();
    this.model.url = 'http://localhost:3000/movies?query=';
    console.log(this.model);
  }


});

export default SearchListView;
