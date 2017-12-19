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
    console.log(this.$('#search-input').val());
    // this allows us to access the text input in the search form
    this.$('#search-input').val();
  }, // searchForMovie
})

export default SearchView
