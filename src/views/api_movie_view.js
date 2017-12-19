import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

// import StoreMovie from 'models/store_movie';
// import StoreMoviesView from 'models/store_movies';
import APIMovie from 'models/api_movie'

import APIMoviesView from '../views/api_movies_view'
import StoreMovieView from '../views/store_movie_view';

import APIMovies from 'collections/api_movies'
import StoreLibrary from '/collections/store_library';

const APIMovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },
  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {

  },
});

export default APIMovieView;
