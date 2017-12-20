import Backbone from 'backbone';
import ReturnedMovie from '../models/returned_movie';
import ReturnedMovieView from '../views/returned_movie_view';
import Movie from '../models/movie';
import $ from 'jquery';

const ReturnedMovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
    this.listenTo(this.bus, 'addMovie', this.addMovie);
  },
  events: {
    'click form .btn-search': 'matchingMovies'
  },
  addMovie(movie){
    console.log('in add movie method');
    console.log(movie);

    const newMovie = new ReturnedMovie(movie);
    console.log(newMovie);

    newMovie.save({}, {
      success: (model, response) => {
        console.log('save worked');
        this.bus.trigger('addToCollection', newMovie);
      },
      error: (model, response) => {
        console.log('save failed');
        console.log(model);
        console.log(response);
      }
    });
  },
  matchingMovies(event) {
    // console.log('why the eff is this not working')
    event.preventDefault();

    const movieTitle = this.getFormData();
    // console.log('This is the movie title: ' + movieTitle.title);
    // console.log(this.model.url);
    this.model.url += movieTitle.title;
    // console.log(url);
    const results = this.model.fetch({
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
    this.model.url = 'http://localhost:3000/movies/?query=';
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
