import Backbone from 'backbone';
// import StoreMovieView from '../views/store_movie_view';
// import StoreMovie from 'models/store_movie';
// import StoreMovies from '/collections/store_movies';
// import StoreMoviesView from 'models/store_movies';
import APIMovieView from '../views/api_movie_view';
import APIMovie from 'models/api_movie';
import APIMovies from 'models/api_movies';


const APIMoviesView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },
  render() {
    this.model.each((apiMovie) => {
      const apiMovieView = new APIMovieView({
        model: apiMovie,
        template: this.template,
        className: 'apiMovie',
      });
     this.$('#api-movies').append(apiMovieView.render().$el);
    });
    return this;
  },

});

export default APIMoviesView;
