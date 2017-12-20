import Backbone from 'backbone';
import MovieView from './movie_view';
import Movie from '../models/movie';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;

    this.listenTo(this.model, 'update', this.render);
  },
  render() {
    this.$('ul').empty();

    this.model.forEach((movie) => {
      // console.log(movie);
      const movieView = new MovieView({
        bus: this.bus,
        model: movie,
        template: this.template,
        tagName: 'li',
        className: 'movie',
      });
      this.$('ul').append(movieView.render().$el);
    });

    return this;
  },
});

export default MovieListView;
