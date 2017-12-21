import Backbone from 'backbone';
import Movie from '../models/movie';
import MovieList from '../collections/movie_list';

const MovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
    this.collection = params.collection;
  },

  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    'click': 'showMovie',
  },

  showMovie(event){
    let found = this.collection.where({overview: this.model.get('overview')}).length > 0;
    this.model.set('inInventory', found);

    this.bus.trigger('addToCollection', this.model);
  },
});

export default MovieView;
