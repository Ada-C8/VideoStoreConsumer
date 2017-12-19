import Backbone from 'backbone';
import MovieView from '../views/movie_view'

import Movie from '../models/movie';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
    this.bus = params.bus;
  },
  render() {
    this.model.each((movie) => {
      console.log('in Movie List View render');
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagName: 'tr',
        className: 'movie',
        // bus: this.bus,
      });
      this.$('#movie-list').append(movieView.render().$el);
    });
    return this;
  },

  events: {
    // 'click button.btn-search-api': 'searchApi',
  },

  // getFormData() {
  //   console.log("I am reading the form")
  //   const formData = {};
  //   const title = this.$('.movie-entry-form input[name=title]').val();
  //   // formData['title'] = title;
  //   return title;
  // },

  // searchApi() {
  //   event.preventDefault();
  //   const title = this.getFormData()
  //   const movie = new Movie({
  //     query: title,
  //   });
  //
  //   movie.fetch()
  //   console.log(movie)
  //   console.log(title);
  //
  //   //I have had trouble getting individual movie data out of the returned movie object.  I wonder if it is partly b/c we stored a list of results in one movie object.  Maybe there is a better way to get the movie info out than I thought of.
  //
  //   //I wonder if we should make a new model, collection and view and list_view for search results.  We can then use the `http://localhost:3000/movies?query=${this.get('query')}` as the url for the result model, and http://localhost:3000/movies/ for the url for the movie model.
  //
  //
  //
  //   //next step. Sortout and append the returned movies.
  // }


});

export default MovieListView;
