import Backbone from 'backbone';
import _ from 'underscore';
import MovieView from '../views/movie_view';
import Movie from '../models/movie';
import MovieList from '../collections/movie_list';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);
  },
  render() {
    this.$('#movies').empty();
    // this.model.fetch();
    this.model.each((movie) => {
      const movieView = new MovieView ({
        model: movie,
        template: this.template,
        tagName: 'li',
        className: 'movie'
      });
      this.$('#movies').append(movieView.render().$el);
    }); // end of each loop
    return this;
  }, // end of render
  events: {
    'click button.list_movies': 'allMovieList',
    'submit button.search': 'searchDbList',
  },//end event
  allMovieList: function(event){
    const movies = new MovieList();
    movies.fetch();
  },

}); // end MovieListView

export default MovieListView;
