import Backbone from 'backbone';
import Movie from '../models/movie';
import MovieList from '../collections/movie_list';

const SearchView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },
  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click button.add': 'addMovie',
  },
  addMovie: function(e) {
    e.preventDefault();
    this.model.save();

  }

});

export default SearchView;
