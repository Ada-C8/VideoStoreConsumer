import Backbone from 'backbone';

const Search = Backbone.Model.extend({
  initialize(attributes) {
    this.query = attributes.query;
  },
  url: function(){
    let url = 'http://localhost:3000/movies?query='+this.query;
    console.log(url);
    return url;
  },
  parse: function(response) {
    return response;
  },
});

export default Search;
