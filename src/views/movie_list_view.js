import Backbone from 'backbone';
import MovieView from './movie_view';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
    this.listenTo(this.model, 'update', this.render);
  },
  render() {
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
      list.append(movieView.render().$el);
    });
    return this;
  },
  searchMovies(searchTerm) {
    this.model.resetUrl(searchTerm);
    this.model.fetch()
  },
  addRental(model, quantity) {
    console.log(model);
    const newRental = {
      title: model.get('title'),
      overview: model.get('overview'),
      release_date: model.get('release_date'),
      image_url: model.get('image_url'),
      external_id: model.get('id'),
      inventory: quantity,
    };
    console.log(newRental);
    this.model.add(newRental);
    console.log(this.model.models);
  },
});

export default MovieListView;
