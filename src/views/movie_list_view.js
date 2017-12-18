import Backbone from 'backbone';
import MovieView from './movie_view';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
    // this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.bus, 'showRentalLibrary', this.render);
  },
  render() {
    console.log('RENDERING');
    const list = this.$('#movies');
    list.empty();
    this.model.each((movie) => {
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagName: 'li',
        className: 'movie',
        bus: this.bus,
      });
      console.log(movie);
      list.append(movieView.render().$el);
    });
    return this;
  },
});

export default MovieListView;
