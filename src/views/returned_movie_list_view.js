import Backbone from 'backbone';
import ReturnedMovie from '../models/returned_movie';
import ReturnedMovieView from '../views/returned_movie_view';

const ReturnedMovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
  },
  events: {
    'click form .btn-search': 'matchingMovies',
  },

  matchingMovies(event) {
    console.log('why the eff is this not working')
    event.preventDefault();

    const movieTitle = this.getFormData();

    const searchedMovie = new ReturnedMovie({title: movieTitle})
    const results = searchedMovie.fetch({
      success: (model, response) => {
        response.forEach((movieData) => {
          let newMovie = new ReturnedMovie(movieData);

          let returnedMovieView = new ReturnedMovieView({
            tagName: 'li',
            template: this.template,
            model: newMovie,
            bus: this.bus,
          });
          this.$('#matching-movies').append(returnedMovieView.render().$el);
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
  // TODO: implement this
  clearFormData() {
    this.$('form input[name=price-target]').val('');
    this.$('form-errors').empty();
  },

}); // ReturnedMovieListView

export default ReturnedMovieListView;
