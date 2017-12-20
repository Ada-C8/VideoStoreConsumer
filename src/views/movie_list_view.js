import Backbone from 'backbone';
import MovieView from '../views/movie_view'

import Movie from '../models/movie';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
    this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.bus, 'addMovieDB', this.addMovieDB)
  },
  render(searchResults) {
    this.$('#movie-list').empty();
    if (searchResults) {
      searchResults.forEach((movie) => {
        console.log('in Movie List View render');
        const movieView = new MovieView({
          model: movie,
          template: this.template,
          tagName: 'tr',
          className: 'movie',
          bus: this.bus,
        });
        this.$('#movie-list').append(movieView.render().$el);
      });
    } else {
      this.model.sort();
      this.model.each((movie) => {
        console.log('in Movie List View render');
        const movieView = new MovieView({
          model: movie,
          template: this.template,
          tagName: 'tr',
          className: 'movie',
          bus: this.bus,
        });
        this.$('#movie-list').append(movieView.render().$el);
      });
      // }
      return this;
    }
  },

  events: {
    'click button.btn-search': 'searchMovies',
    'click button.btn-showAll': 'render',
  },

  addMovieDB(movie_hash){
    const newMovie = new Movie(movie_hash)
    this.model.add(newMovie);

    if (!newMovie.isValid()) {
      // handleValidationFailuresTrip(trip.validationError);
      return;
    }
    this.clearMessages('#movie-success-messages');
    this.clearMessages('#movie-fail-messages');

    newMovie.save({}, {
      success: (model, response) => {
        console.log(this.model.attributes)
        console.log(`Successfully added new movie: ${newMovie.get('title')}`);
        let successMessage = `Successfully added new movie: ${newMovie.get('title')}`;
        this.$('#movie-success-messages').append(successMessage);
        this.$('#movie-success-messages').show();
      },
      error: (model, response) => {
        console.log('Failed to save movie! Server response:');
        console.log(response);
        this.model.remove(model);
      },
    });
  },

  clearMessages(tag){
    this.$(tag).html('');
  },

  getFormData() {
    console.log("I am reading the movie rental form")
    const title = this.$('.movie-search-form input[name=title]').val();
    this.$('.movie-search-form input[name=title]').val('')
    return title;
  },

  searchMovies() {
    event.preventDefault();
    const query = this.getFormData()
    const searchResults = this.model.myWhere('title', query);
    console.log(searchResults.length == 0);
    this.clearMessages('#movie-fail-messages')
    this.clearMessages('#movie-success-messages');
    if (searchResults.length == 0){
      this.render()
      // this.$('#movie-fail-messages').html('');
      if (query == ""){
        let failMessage = 'Search requires an inputed title'
        this.$('#movie-fail-messages').append(failMessage);
      }else {
        let failMessage = `No movies found for title "${query}"`;
        this.$('#movie-fail-messages').append(failMessage);
      }
    } else {
      this.render(searchResults);
    }
  },
});

export default MovieListView;
