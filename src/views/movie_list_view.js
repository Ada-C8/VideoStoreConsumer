import Backbone from 'backbone';
import _ from 'underscore';

import Movie from '../models/movie';
import MovieView from '../views/movie_view';

const MovieListView = Backbone.View.extend ({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update reset', this.render);
  }, //can listen to update or reset

  render() {
    this.$('#movie-library').empty();
    this.model.each((movie) => {
      const movieView = new MovieView ({
        model: movie,
        template: this.template,
        tagName: 'li',
        className: 'movie-item',
      });

      this.$('#movie-library').append(movieView.render().$el);

    });
    return this;
  }
});

export default MovieListView;
