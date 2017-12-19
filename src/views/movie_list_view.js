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
  },

  getRentals: function(e) {
    e.preventDefault();
    console.log(this.model);
    this.model.fetch().done(() => {
      console.log(this.model);
      this.render();
    })

  },

});

export default MovieListView;
