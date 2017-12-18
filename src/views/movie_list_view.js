import Backbone from 'backbone';
import MovieView from '../views/movie_view'

import Movie from '../models/movie';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
    this.bus = params.bus;
  },
  render() {
    this.model.each((movie) => {
      console.log('in Movie List View render');
      console.log(movie);
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagName: 'tr',
        className: 'movie',
        // bus: this.bus,
      });
      this.$('#movie-list').append(movieView.render().$el);
    });
    return this;
  },

});

export default MovieListView;
