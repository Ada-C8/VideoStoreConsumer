import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.model = params.model;
    // Listen to changes in the model and call render when they occur.
    this.listenTo(this.model, "change", this.render);
  },
  events: {
    'click button.btn-add-movie': 'addMovie',
  },
  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  addMovie() {
    console.log('in Add Movie');
    // console.log(this.model);

    const movieData = this.model.attributes;
    console.log(movieData);
    // this.trigger('')
    // debugger;
    this.model.save();
    console.log('the movie saved');
    // this.trigger('clickedAddMovie', movieData);
  }
});

export default MovieView;
