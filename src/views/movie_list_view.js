import Backbone from 'backbone';
import MovieView from './movie_view';
// import Movie from '../models/movie';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;

  },
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
submit(event) {
  event.preventDefault();
  const searchTerm = this.$('input[name=search]').val().toUpperCase();
  console.log(searchTerm);
  const movieList = this.model.models;
  console.log(movieList);
  const filteredMovies = movieList.filter(movie => movie.get('upperCaseTitle').includes(searchTerm));
  console.log(filteredMovies);
  this.$('#list').empty();

  filteredMovies.forEach((movie) => {
    const movieView = new MovieView({
      model: movie,
      template: this.template,
      tagName: 'li',
      className: 'movie',
    });
    this.$('#list').append(movieView.render().$el);
  });
  return this;

},
  events: {
    'click #movie-button': 'render',
    'click #searchButton': 'submit'
  }
});

export default MovieListView;
