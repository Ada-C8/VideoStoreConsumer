import Backbone from 'backbone';
import Movie from '../models/movie';
import MovieList from '../collections/movie_list';

const SearchView = Backbone.View.extend({
  initialize(params) {
    this.searchTemplate = params.searchTemplate;
    this.listenTo(this.model, "change", this.render);
  },
  render() {
    const compiledTemplate = this.searchTemplate(this.model.toJSON());
    this.$el.html(compiledTemplate);
    console.log('in search model')
    console.log(this)
    return this;
  },

});

export default SearchView;
