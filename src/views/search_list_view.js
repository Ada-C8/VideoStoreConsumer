import Backbone from 'backbone';
import $ from 'jquery';
import SearchView from './search_view';


const SearchListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template
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
    // const APIresponse = $.get(encoded_url)

    $.get(encoded_url).done( (data) => {
      const APIresponse = data;
      // console.log(APIresponse["responseJSON"]);
      this.render(APIresponse)
    })



  }, // searchForMovie
  render(results){
    console.log("inside render in search list view");
    console.log(results[0]);
    // make a new search view for each result in the search response.
    // results.each((result) => {
    //   const searchView = new SearchView({
    //     model: result,
    //     template: this.template,
    //     tagName: 'tr',
    //   });
    //   this.$('#search-list').append(searchView.render().$el);
    // })


    for (var result of results) {
      const searchView = new SearchView({
        model: result,
        template: this.template,
        tagName: 'tr',
      });
      this.$('#search-list').append(searchView.render().$el);
}
    return this
  }
}) //close view

export default SearchListView
