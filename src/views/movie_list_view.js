import Backbone from 'backbone';
import MovieView from './movie_view';
import Movie from '../models/movie';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;

    this.listenTo(this.model, 'update', this.render);
    this.listenTo();
  },
  render() {
    this.$('ul').empty();

    this.model.forEach((movie) => {
      console.log(movie);
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagName: 'li',
        className: 'movie',
      });
      this.$(' ul').append(movieView.render().$el);
    });

    return this;
  },
  events: {
    'click button#search': 'search',
  },
  search(query) {
    let movieURL = "http://localhost:3000/movies?query=" + query;
    console.log(movieURL);
    return movieURL;
  }
});

export default MovieListView;
