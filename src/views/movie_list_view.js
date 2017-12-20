import Backbone from 'backbone';
import Movie from '../models/movie';
import MovieList from '../collections/movie_list';
import MovieView from '../views/movie_view';
import ReturnedMovieView from '../views/returned_movie_view';
import $ from 'jquery';
// import returnedMovieList from '../collections/movie_search';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
    this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.bus, 'addToCollection', this.addToCollection);
  },
  addToCollection(movie){
    console.log(`The movie in the view method is ${movie}`);
    const movieView = new MovieView({
      tagName: 'tr',
      template: this.template,
      model: movie,
      bus: this.bus
    });
    this.$('#movies-in-store').append(movieView.render().$el);
  },
  render() {
    this.$('#movie-list').empty();
    const lastMovie = this.model.at(this.model.length -1);
    const movieView = new MovieView({
      tagName: 'tr',
      template: this.template,
      model: lastMovie,
      bus: this.bus,
    });

    this.$('#movies-in-store').append(movieView.render().$el);

    return this;
  },

}); // MovieListView

export default MovieListView;
