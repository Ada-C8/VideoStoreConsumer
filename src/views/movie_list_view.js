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
    },

    addMovieDB(movie_hash){
      const newMovie = new Movie(movie_hash)
      this.model.add(newMovie);

      if (!newMovie.isValid()) {
        // handleValidationFailuresTrip(trip.validationError);
        return;
      }
      this.clearMessages();

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

          // handleValidationFailuresTrip(response.responseJSON["errors"]);
        },
      });
    },
    clearMessages(){
      this.$('#movie-success-messages').html('');
    },
    getFormData() {
      console.log("I am reading the movie rental form")
      // const formData = {};
      const title = this.$('.movie-search-form input[name=title]').val();
      this.$('.movie-search-form input[name=title]').val('')
      // formData['title'] = title;
      return title;
    },

    searchMovies() {
      event.preventDefault();
      const title = this.getFormData()
      const searchResults = this.model.where({title: title});
      console.log(searchResults);
      this.render(searchResults)
    },



  });

  export default MovieListView;
