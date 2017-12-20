import $ from 'jquery';

import Backbone from 'backbone';

import MovieView from './movie_view';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
    this.listenTo(this.bus, 'updateStatusMessage', this.statusMessage);
  },

  render(args) {
    this.$('#rentals').empty();
    this.model.each((movie) => {
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagname: 'li',
        className: 'rental',
        bus: this.bus,
      })
      this.$('#rentals').append(movieView.render(args).$el);
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
      this.render({button: false});
    })

  },

  searchDBMovies: function(e) {
    e.preventDefault();
    let searchWord = this.$('input[name=search-movies]').val();
    this.model.fetch({ data: $.param({'query': searchWord}) }).done(() => {
      if (this.model.length == 0) {
        this.statusMessage('No Results Found!')
      } else {
        this.statusMessage(`${this.model.length} Results Found.`)
      }
      this.render({button: true});
    })
  },

  statusMessage: function(statusMessage) {
    this.$('#status-messages').empty();
    this.$('#status-messages').html(`<h3>${statusMessage}</h3>`);
  }

});

export default MovieListView;

// collection.fetch({ data: $.param({ page: 1}) });
