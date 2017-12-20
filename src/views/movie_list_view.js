import Backbone from 'backbone';
import _ from 'underscore';
import MovieView from '../views/movie_view';
import Movie from '../models/movie';
import MovieList from '../collections/movie_list';


const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.searchTemplate = params.searchTemplate;
    this.listenTo(this.model, 'update', this.render);
  },
  render() {
    this.$('#movies').empty();
    this.model.each((movie) => {
      const movieView = new MovieView ({
        model: movie,
        template: this.template,
        searchTemplate: this.searchTemplate,
        tagName: 'li',
        className: 'movie'
      });

      this.$('#movies').append(movieView.render().$el);
    }); // end of each loop
    return this;
  }, // end of render
  events: {
    'click button.api-movies': 'getMovies'
  },
  getMovies: function (e) {
    this.model.fetch();
  },

}); // end MovieListView

export default MovieListView;
