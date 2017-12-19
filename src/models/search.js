import Backbone from 'backbone';

const Search = Backbone.Model.extend({
  defaults: {
  },
  initialize(attributes) {
    this.query = attributes.query;
  },
  validate(attributes) {
  },
  // url: `http://localhost:3000/movies?query=` + this.query,
  url: function(){
    let url = 'http://localhost:3000/movies?query='+this.query;
    console.log(url);
    return url;
  },
  parse: function(response) {
    console.log(response);
    return response;
  },
  comparator: 'title',
});

export default Search;
