import Backbone from 'backbone';
import Movie from '../models/movie';
import MovieList from '../collections/movie_list';
import MovieView from '../views/movie_view';
import MovieSearch from '../collections/movie_search';

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
    console.log(this.model.length);
    this.model.each((movie) => {
      const movieView = new MovieView({
        tagName: 'li',
        template: this.template,
        model: movie,
        bus: this.bus,
      });
      this.$('#movie-list').append(movieView.render().$el);
    });

    return this;
  },

  searchMovies(event) {
    event.preventDefault();
    console.log('This is the searchMovies function');
    const movieTitle = this.$('form input[name=title]').val();
    const movieList = new MovieSearch();
    movieList.url += movieTitle
    console.log(movieList.url);

    movieList.fetch({
      success: (model, response) => {
        response.forEach((movie) => {
          console.log(movie);
        });
      },
      // TODO: CREATE AN ERROR DIV/AND OR TEMPLATE TO DISPLAY ALL ERRORS UNDERNEATH THE SEARCH BAR
      error: (model, reponse) => {
        console.log('Your errors are: ' + response);
        // console.log(`This is the model: ${model}`);
        // console.log(`This is the response: ${reponse}`);
      },
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
