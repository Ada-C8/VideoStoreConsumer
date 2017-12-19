import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie.js';

let MovieDetailsView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },
  render: function() {
    let compiledTemplate = this.template(this.model.toJSON());
    this.$('main').html(compiledTemplate);
  }
});

export default MovieDetailsView;
