import Backbone from 'backbone';
import $ from 'jquery';

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
    // this allows us to access the text input in the search form
    const title = this.$('#search-input').val();

    // create the url to make the api request
    const url = 'http://localhost:3000/movies?query=' + title ;
    const encoded_url = encodeURI(url);

    // make a call to the url using only jQuery
    // this will make a call to the local API's movies index action, which will then make a call to the external API to get all the movies that match the search query
    const response = $.get(encoded_url)
    console.log(response);
  }, // searchForMovie
})

export default SearchView
