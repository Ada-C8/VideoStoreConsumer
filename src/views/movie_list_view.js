import Backbone from 'backbone';
import MovieView from './movie_view';
import Movie from '../models/movie';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    // this.bus = params.bus;

    this.listenTo(this.model, 'update', this.render);
    // this.listenTo(this.bus, 'quote_change_price', this.buySellQuote);
  },

  render() {
    this.$('#movies-list').empty();

    this.model.fetch();

    this.model.each((movie) => {
      const movieView = new MovieView({
        model: movie,
        // bus: this.bus,
        template: this.template,
        tagName: 'li',
        className: 'movie',
      });
      this.$('#movies-list').append(movieView.render().$el);
    });

    return this;
  },
});

export default MovieListView;
