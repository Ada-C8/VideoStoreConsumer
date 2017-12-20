import $ from 'jquery';

import Backbone from 'backbone';
import Movie from '../models/movie';

const VendorView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.detailsTemplate = params.detailsTemplate;
    this.inventory = params.inventory;
    this.bus = params.bus;

    this.listenTo(this.bus, `displayMyDetails${this.model.get('id')}`, this.renderMovieDetails);
  },
  render() {
    const compiledTemplate = this.template(this.model.attributes);
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click this' : 'renderDetails',
    'click button#add-movie': 'addMovie',
  },
  renderDetails: function(e) {
    e.preventDefault();
    this.renderMovieDetails(this.model);
  },
  renderMovieDetails: function(movie, event) {
    $('#movie-details').empty();
    const compiledTemplate = this.detailsTemplate(this.model.attributes);
    this.$el.html(compiledTemplate);
    $('#movie-details').append(this.$el);
  },

  addMovie(event) {
    const title = this.model.get('title').toUpperCase();
    const date = this.model.get('release_date');
    this.bus.trigger('addToLibrary', this.model);
  },

});

export default VendorView;
