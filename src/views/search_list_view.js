import Backbone from 'backbone';
import $ from 'jquery';
import SearchView from './search_view';


const SearchListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
    this.movies = params.movies;
    // NOTE: add template back in later when we need it
    // this.template = params.template;
  }, // initialize
  statusMessage(message) {
    this.$('#status-messages').empty();
    this.$('#status-messages').append(`<p>${message}</p>`)
  }, // statusMessage
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
    // const APIresponse = $.get(encoded_url)

    $.get(encoded_url).done( (data) => {
      const APIresponse = data;
      if (APIresponse.length < 1) {
        console.log('no results');
        this.statusMessage(`No results found for ${title}`);
      }
      this.render(APIresponse)

    })
  }, // searchForMovie
  render(results){
    console.log("inside render in search list view");

    this.$('#search-list').empty();

    for (var result of results) {
      const searchView = new SearchView({
        model: result,
        template: this.template,
        tagName: 'tr',
        bus: this.bus,
        movies: this.movies,
      });
      this.$('#search-list').append(searchView.render().$el);
}
    return this
  },  // render
}) //close view

export default SearchListView
