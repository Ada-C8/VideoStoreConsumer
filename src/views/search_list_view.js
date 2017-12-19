import Backbone from 'backbone';
import SearchView from '../views/search_view'
import SearchList from '../collections/search_list'


import Search from '../models/search';

const SearchListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },
  render() {
    this.model.each((search) => {
      console.log('in Search List View render');
      const searchView = new SearchView({
        model: search,
        template: this.template,
        tagName: 'tr',
        className: 'search',
        // bus: this.bus,
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
    // formData['title'] = title;
    return title;
  },

  searchApi() {
    event.preventDefault();
    const title = this.getFormData()
    // const search = new SearchList();

    // const search = new SearchList({
    //   query: title,
    // });
    // console.log(search);
    this.model.url += title;
    // this.model.set('url', this.model.get('url') + title);
    // console.log('the url with title')
    // console.log(this.model.get('url') + title);
    // console.log(this.model.set(url));

    console.log(this.model.url);

    this.model.fetch()

    // search.fetch()
    console.log(this.model);
    console.log(title);

    //I have had trouble getting individual movie data out of the returned movie object.  I wonder if it is partly b/c we stored a list of results in one movie object.  Maybe there is a better way to get the movie info out than I thought of.

    //I wonder if we should make a new model, collection and view and list_view for search results.  We can then use the `http://localhost:3000/movies?query=${this.get('query')}` as the url for the result model, and http://localhost:3000/movies/ for the url for the movie model.



    //next step. Sortout and append the returned movies.
  }


});

export default SearchListView;
