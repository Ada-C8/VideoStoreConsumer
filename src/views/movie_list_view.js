import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie.js';
import MovieView from './movie_view.js';

let MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update reset', this.render);
  },

  render: function() {
    this.$('main').html('<ul></ul>');
    let that = this;

    this.model.each(function(movie) {
      let movieView = new MovieView({
        model: movie,
        template: that.template,
        tagName: 'li'
      });
      that.$('main ul').append(movieView.render().$el);
      that.listenTo(movieView, 'showMovieDetails', that.showMovieDetails);
    });
    return this;
  },
  events: {
    'click #search-button' : 'searchMovies'
  },
  showMovieDetails: function (movie) {
    this.trigger('showMovieDetails', movie);
  },
  searchMovies: function () {
    var queryTerm = $('#search-box').val();
    $('#search-box').val('');

    this.model.fetch({
      data: { query: queryTerm },
      processData: true,
    });
  },
});

export default MovieListView;
