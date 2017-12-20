import $ from 'jquery';

import Backbone from 'backbone';

import MovieView from './movie_view';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
    this.listenTo(this.bus, 'updateStatusMessage', this.statusMessage);
  },

  render() {
    this.$('#rentals').empty();
    this.model.each((movie) => {
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagname: 'li',
        className: 'rental',
        bus: this.bus,
      })
      this.$('#rentals').append(movieView.render().$el);
    })
    return this;
  },

  events: {
    'click button#btn-rentals': 'getRentals',
    'click button#btn-search': 'searchDBMovies',
  },

  getRentals: function(e) {
    e.preventDefault();
    this.model.fetch().done(() => {
      this.render();
      console.log(this.model.models);
    })

  },

  searchDBMovies: function(e) {
    e.preventDefault();
    let searchWord = this.$('input[name=search-movies]').val();
    console.log(searchWord);
    this.model.fetch({ data: $.param({'query': searchWord}) }).done(() => {
      console.log(this.model);
      this.render();
    })
  },

  statusMessage: function(statusMessage) {
    this.$('#status-messages').empty();
    this.$('#status-messages').html(`<h3>${statusMessage}</h3>`);
  }

});

export default MovieListView;

// collection.fetch({ data: $.param({ page: 1}) });
