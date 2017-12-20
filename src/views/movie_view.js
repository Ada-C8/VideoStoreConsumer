import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
    // console.log(this.bus);
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
    let selectedMovie = this.model.attributes;

    this.bus.trigger('addToCollection', selectedMovie);
  },
});

export default MovieView;
