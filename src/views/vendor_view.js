import $ from 'jquery';

import Backbone from 'backbone';
import Movie from '../models/movie';

const VendorView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.detailsTemplate = params.detailsTemplate;
    this.inventory = params.inventory;
    this.bus = params.bus;
    // this.listenTo(this.bus, `displayMyDetails${this.model.get('cid')}`, this.renderMovieDetails);
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
    // debugger;
    console.log('im trying to render a detail');
    e.preventDefault();
    this.renderMovieDetails(this.model);
  },
  renderMovieDetails: function(movie, event) {
    // debugger;
    $('#movie-details').empty();
    const compiledTemplate = this.detailsTemplate(this.model.attributes);
    this.$el.html(compiledTemplate);
    $('#movie-details').append(this.$el);
    // this.$('#movie-details').append(this.$el);
  },

  addMovie(event) {
    // check if movie already exists in collection
    const title = this.model.get('title').toUpperCase();
    const date = this.model.get('release_date');

    let result = this.inventory.findWhere({upperCaseTitle: title});

    console.log(`result is`);
    console.log(result);

    // if doesn't exist add to collection
    if (!result) {
      console.log('movie does not exist');
      event.preventDefault();
      console.log('add movie');
      console.log(this.model);

      const movie_data = {
        external_id: this.model.get('id'),
        title: this.model.get('title'),
        release_date: this.model.get('release_date'),
        image_url: this.model.get('image_url'),
        overview: this.model.get('overview'),
      }
      const newMovie = new Movie(movie_data);
      console.log('saving movie');
      newMovie.save(null, { type: 'POST' });

      console.log('this is a new movie');
      console.log(newMovie);

      this.bus.trigger('addMovie', newMovie);
    }
  },

});

export default VendorView;
