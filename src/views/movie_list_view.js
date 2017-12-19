import Backbone from 'backbone';
import MovieView from '../views/movie_view';
import Movie from '../models/movie';


const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.detail_template = params.detail_template;
  },

  render() {
    this.$el.empty();

    this.model.each((movie) => {
      const movieView = new MovieView({
        template: this.template,
        detail_template: this.detail_template,
        model: movie,
        tagName: 'li',
        className: 'movie',
      });
      this.$el.append(movieView.render().$el)
    });

    return this;
  },
});

export default MovieListView;
