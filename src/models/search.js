import Backbone from 'backbone';

const Search = Backbone.Model.extend({

  url: 'http://localhost:3000/movies?query=',
})

export default Search;
