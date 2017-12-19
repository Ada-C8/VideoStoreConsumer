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
    this.$('#api-movies').empty();
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

//   keywordSearch: function(event) {
//   //   event.preventDefault();
//   //   console.log('in search');
//   //   const query = this.$('input[name=query]').val();
//   //   APIMoviesView.query = query;
//   //   console.log(APIMoviesView.query);
//   //   console.log(query);
//   //   this.trigger('sendSearch', query);
//   //   this.query = query;
//   //   this.trigger('sendSearch', this.query);
//   //
//   //
//   // }
//
});

export default APIMoviesView;
