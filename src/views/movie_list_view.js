import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie.js';
import MovieView from './movie_view.js';

let MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },
  render: function() {
    this.$('#movie-list').html('<ul></ul>');
    let that = this;

    this.model.each(function(movie) {
      let movieView = new MovieView({
        model: movie,
        template: that.template,
        tagName: 'li'
      });
      that.$('#movie-list ul').append(movieView.render().$el);
    });
    return this;
  }
});

export default MovieListView;
