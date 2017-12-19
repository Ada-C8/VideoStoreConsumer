import $ from 'jquery';

import Backbone from 'backbone';

import MovieView from './movie_view';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
  },
  render() {
    this.$('#rentals').empty();
    this.model.each((movie) => {
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagname: 'li',
        className: 'rental',
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

});

export default MovieListView;

// collection.fetch({ data: $.param({ page: 1}) });
