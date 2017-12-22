import Backbone from 'backbone';
import Movie from '../models/movie';
import MovieListView from './movie_list_view';
import MovieDetailsView from './movie_details_view';
import $ from 'jquery';
import _ from 'underscore';

let ApplicationView = Backbone.View.extend({
  initialize: function (params) {
    this.movieList = params.movieList;
    this.movieListTemplate = params.movieListTemplate;
    this.movieDetailsTemplate = params.movieDetailsTemplate;
  },
  events: {
    'click h1' : 'showList'
  },

  showList: function () {
    let movieListView = new MovieListView({
      model: this.movieList,
      template: this.movieListTemplate,
      el: 'body',
    });

    this.movieList.fetch({reset: true});
    this.listenTo(movieListView, 'showMovieDetails', this.showMovieDetails);
  },
  showMovieDetails: function (movie) {
    let movieDetailsView = new MovieDetailsView({
      model: movie,
      template: this.movieDetailsTemplate,
      el: 'body'
    });
    movieDetailsView.render();
  },

});

export default ApplicationView;
