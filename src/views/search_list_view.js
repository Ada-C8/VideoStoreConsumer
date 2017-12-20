import Backbone from 'backbone';
import $ from 'jquery';
import SearchView from './search_view';


const SearchListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.movies = params.movies;
    this.bus = params.bus;
    this.listenTo(this.bus, 'errorSavingMovie', this.renderStatus);
  }, // initialize
  statusMessage(message) {
    this.$('#status-messages').empty();
    this.$('#status-messages').append(`<p>${message}</p>`)
  }, // statusMessage
  events: {
    'click #search-button': 'searchForMovie',
    'click #clear-search': 'clearResults',
  }, // events
  searchForMovie(event) {
    event.preventDefault();
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
    // select element in html and toggle class
    $('#results-table').toggleClass('hide')
    // make a new search view for each result in the search response.
    for (var result of results) {
      const searchView = new SearchView({
        model: result,
        template: this.template,
        tagName: 'tr',
        movies: this.movies,
        bus: this.bus,
      });
      this.$('#search-list').append(searchView.render().$el);
    }
    return this
  },//close render
  clearResults(){
    $('#results-table').toggleClass('hide');
    $('#search-list').empty();
  },//clearResults
  renderStatus(errorMessage){
    this.$('#search-status').empty();
    this.$('#search-status').append(errorMessage)
  }
}) //close view

export default SearchListView
