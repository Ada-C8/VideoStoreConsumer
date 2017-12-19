import Backbone from 'backbone';
import Search from '../models/search';

const SearchView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.query = params.query;
  },
  url: function(){
    let url = 'http://localhost:3000/movies?query='+this.query;
    console.log(url);
    return url;
  },
  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);

    return this;
  },
  events: {
  },
});

export default SearchView;
