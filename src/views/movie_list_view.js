import Backbone from 'backbone';
import MovieView from './movie_view';
// import Movie from '../models/movie';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;

  },
  // model: Movie,
  // url: 'http://localhost:3000/movies',
  // parse(response) {
  //   console.log(response);
  //   return response;
  // },
  render() {
    console.log('IN RENDER');
    console.log(this.model);
    this.$('#list').empty();

    this.model.each((movie) => {
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagName: 'li',
        className: 'movie',
      });
      this.$('#list').append(movieView.render().$el);
  })
  return this;
},
  events: {
    'click #movie-button': 'render',
  }
});

export default MovieListView;
