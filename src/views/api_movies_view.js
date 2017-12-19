import Backbone from 'backbone';

import _ from 'underscore';
import $ from 'jquery';

// import StoreMovieView from '../views/store_movie_view';
// import StoreMovie from 'models/store_movie';
// import StoreMovies from '/collections/store_movies';
// import StoreMoviesView from 'models/store_movies';
import APIMovieView from '../views/api_movie_view';
import APIMovie from 'models/api_movie';
import APIMovies from 'collections/api_movies';


const APIMoviesView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },
  render() {
    console.log('in APIMoviesView render');
    this.$('#api-movies').empty();
    this.model.each((apiMovie) => {
      const apiMovieView = new APIMovieView({
        model: apiMovie,
        template: this.template,
        className: 'apiMovie',
      });
      apiMovieView.storeLibrary = this.storeLibrary;
      this.$('#api-movies').append(apiMovieView.render().$el);
    });
    // console.log(this.model.length);
    // if (this.model.length === 0 ) {
    //
    // }
    return this;
  },
});

export default APIMoviesView;
