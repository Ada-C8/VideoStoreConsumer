import Backbone from 'backbone';
import Movie from '../models/movie';
import MovieList from '../collections/movie_list';
import MovieView from '../views/movie_view';
import ReturnedMovieView from '../views/returned_movie_view';
// import returnedMovieList from '../collections/movie_search';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
    this.listenTo(this.model, 'update', this.render);
  },

  events: {
    'click form .btn-search': 'searchMovies',
  },

  render() {
    this.$('#movie-list').empty();
    const lastMovie = this.model.at(this.model.length -1);
    const movieView = new MovieView({
      tagName: 'li',
      template: this.template,
      model: lastMovie,
      bus: this.bus,
    });

    this.$('#movies-in-store').append(movieView.render().$el);

    return this;
  },

  searchMovies(event) {
    event.preventDefault();
    // console.log('This is the searchMovies function');
    this.$('#movie-list').empty();

    const movieTitle = this.getFormData();
    const returnedMovieList = new Movie({title: movieTitle})
    const results = returnedMovieList.fetch({
      success: (model, response) => {
        response.forEach((movieData) => {
          const newMovie = new Movie(movieData);
          // TODO: This needs to be a ReturnedMovieView
          const movieView = new MovieView({
            tagName: 'li',
            template: this.template,
            model: newMovie,
            bus: this.bus,
          });
          this.$('#matching-movies').append(movieView.render().$el);
        });
      },
      error: (model, response) => {
        console.log(`This is the model: ${model} in the movie list view`);
        console.log(`This is the response: ${reponse} in the movie list view`);
      }
    });
  },

  getFormData() {
    const data = {};
    data['title'] = this.$('form input[name=title]').val();
    return data;
  },

  // TODO: ADD CLEARFORM DATA FUNCTION
}); // MovieListView

  //
  //
  // clearFormData() {
  //   this.$('form input[name=price-target]').val('');
  //   this.$('form-errors').empty();
  // },


export default MovieListView;
