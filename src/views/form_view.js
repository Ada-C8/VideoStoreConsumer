import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import MovieView from '../views/movie_view';
import VendorListView from '../views/vendor_list_view';
import MovieList from '../collections/movie_list';
import Movie from '../models/movie';

const FormView = Backbone.View.extend({
  initialize(params) {
    this.bus = params.bus;
    this.model = params.model;
    this.vendorModel = params.vendorModel;
    this.listenTo(this.bus, 'updateStatus', this.updateStatusMessageWith);
  },
  events: {
    'click button.find-movie' : 'findMovie',
    'click button.show-all' : 'showAllMovies',
    'click button.vendor': 'searchTMDB',
  },
  showAllMovies: function(e) {
    e.preventDefault();

    this.$('#movies-container').toggle();
  },
  findMovie: function(e) {
    e.preventDefault();
    const title = this.$('input').val();
    let result;

    if (title && title !== '') result = (this.model.findWhereIgnoreCase('title', title))[0];
    if (result ) {
      this.bus.trigger(`displayMyDetails${result.get('id')}`, result);
    } else {
      this.$('#status-message').append(`<li class="alert">"${title}" is not present in rental library.</li>`);
    }
  },
  searchModel: function(title) {
    const movie = this.model.findWhereIgnoreCase({ title: title });
    return movie
  },
  searchTMDB: function(event) {
    event.preventDefault();
    const title = this.$('input').val();
    const that = this;
    this.vendorModel.fetch({
      data: $.param({ query: title }),
      success: function(vendorModel, response, options) {
        that.updateStatusFrom(options);
      }
   });

  },
  updateStatusMessageWith: function(movie) {
    this.$('#status-message').empty();
    if (movie.isValid() && movie.get('unique')) {
      this.$('#status-message').append(`<li class="success">${movie.get('title')} successfully added to rental library</li>`);
    } else if (!movie.get('unique')) {
      this.$('#status-message').append(`<li class="alert">${movie.get('title')} is already in the rental library.</li>`);
    } else {
      this.$('#status-message').append(`<li class="alert">${movie.get('title')} was not successfully added to rental library.</li>`);
      const errors = movie.validationError;
      Object.keys(errors).forEach((field) => {
        errors[field].forEach((error) => {
          this.$('#status-message').append(`<li class="alert">${field}: ${error}</li>`);
        });
      });
    }

  },
  updateStatusFrom: function(options) {
    this.$('#status-message').empty();
    const query = options.data.slice(6)
    if(options.xhr.responseJSON.length === 0){
      this.$('#status-message').append(`<li class="alert">No results for query: ${query}</li>`);
    } else {
      this.$('#status-message').append(`<li class="success">Results for query: ${query}</li>`);
    }
  }

});

export default FormView;
