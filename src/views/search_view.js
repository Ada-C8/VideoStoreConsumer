import Backbone from 'backbone';

const SearchView = Backbone.View.extend({
  initialize(params) {
    // NOTE: add template back in later when we need it
    // this.template = params.template;
  }, // initialize
  events: {
    'click #search-button': 'searchForMovie',
  }, // events
  searchForMovie(event) {
    event.preventDefault();
    console.log('in searchForMovie');
  }, // searchForMovie
})

export default SearchView
