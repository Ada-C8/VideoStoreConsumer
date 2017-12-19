import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.model = params.model;
    this.bus = params.bus;
  },
  render() {
    const compileTemplate = this.template(this.model.toJSON());
    this.$el.html(compileTemplate);
    return this;
  },
  addInventory(event) {
    event.preventDefault();
    let movieData = this.model.attributes;
    movieData['inventory'] = 1;
    movieData['bus'] = this.bus;
    const newMovie = new Movie(movieData);
    console.log(this.bus);
    this.bus.trigger(`addMe`, newMovie.attributes);
  },
  events: {
    'click .add-inventory': 'addInventory'
  },

});

export default MovieView;
