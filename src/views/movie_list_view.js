import Backbone from 'backbone';
// import _ from 'underscore';
import MovieView from '../views/movie_view';
import Movie from '../models/movie';


const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
  },

  render() {
    this.$el.empty();

    this.model.each((movie) => {
      console.log(movie);
      const movieView = new MovieView({
        template: this.template,
        model: movie,
        tagName: 'li',
        className: 'movie',
      });
      this.$el.append(movieView.render().$el)
    });


    return this;
  },
});

export default MovieListView;
