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
  render() {
    // this.$('#movie-list').empty();
    // if (searchResults) {
    //   searchResults.forEach((movie) => {
    //     console.log('in Movie List View render');
    //     const movieView = new MovieView({
    //       model: movie,
    //       template: this.template,
    //       tagName: 'tr',
    //       className: 'movie',
    //       bus: this.bus,
    //     });
    //     this.$('#movie-list').append(movieView.render().$el);
    //   });
    // } else {
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
    newMovie.save({}, {
      success: (model, response) => {
        console.log(this.model.attributes)
        console.log(`Successfully added new movie: ${newMovie.get('title')}`);
        // $('.movie-success-messages').show();
      },
      error: (model, response) => {
        console.log('Failed to save movie! Server response:');
        console.log(response);
        this.model.remove(model);

        // handleValidationFailuresTrip(response.responseJSON["errors"]);
      },
    });
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

    // return searchResults;
    this.render(searchResults)
    // const movie = new Movie({
    //   query: title,
    // });

    // movie.fetch()
    // console.log(movie)
    // console.log(title);

    //I have had trouble getting individual movie data out of the returned movie object.  I wonder if it is partly b/c we stored a list of results in one movie object.  Maybe there is a better way to get the movie info out than I thought of.

    //I wonder if we should make a new model, collection and view and list_view for search results.  We can then use the `http://localhost:3000/movies?query=${this.get('query')}` as the url for the result model, and http://localhost:3000/movies/ for the url for the movie model.



    //next step. Sortout and append the returned movies.
  }


});

export default MovieListView;
