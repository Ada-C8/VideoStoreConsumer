import Backbone from 'backbone';
import MovieView from './movie_view';
import Movie from '../models/movie';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.external = params.external;

    this.listenTo(this.model, 'update', this.render);
  },

  render() {
    this.$('#movies-list').empty();

    if (this.model.length === 0) {
      this.$('#movies-list').append('<h3> No results found, please try again. </h3>')
    }

    this.model.each((movie) => {
      if (this.movieList.contains(movie)) {
        console.log(movie);
      }
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        external: this.external,
        tagName: 'li',
        className: 'movie',
      });
      this.$('#movies-list').append(movieView.render().$el);
    });

    return this;
  },
});

export default MovieListView;
