import Backbone from 'backbone';
import MovieView from '../views/movie_view';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
    this.listenTo(this.model, 'update', this.render);
  },

  render() {
    this.$('#movie-list').empty();
    console.log(this.model.length);
    this.model.each((movie) => {
      const movieView = new MovieView({
        tagName: 'li',
        template: this.template,
        model: movie,
        bus: this.bus,
      });
      this.$('#movie-list').append(movieView.render().$el);
    });

    return this;
  },

}); // MovieListView

export default MovieListView;
