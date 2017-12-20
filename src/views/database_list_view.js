import Backbone from 'backbone';
import _ from 'underscore';
import Movie from '../models/movie';
import MovieView from '../views/movie_view'

const DatabaseListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
    this.inventory = params.availableInventory;
  },

  render() {
    this.$('#database-movies').empty();
    this.model.forEach((movie) => {
      let inventoried = false;
      this.inventory.forEach((availableMovie) => {
        if (availableMovie.get('overview') === movie.get('overview')) {
          inventoried = true;
        }
        movie.set('inInventory', inventoried);
      })

      const movieView = new MovieView({
        model: movie,
        inventory: this.inventory,
        template: this.template,
        tagName: 'tr',
        className: 'movie',
      });
      this.$('#database-movies').append(movieView.render().$el);
      return this;
    });
  },
  updateStatusMessageFrom: function(messageHash) {
  const errorMessageEl = this.$('.form-errors');
  errorMessageEl.empty();
  _.each(messageHash, (messageType) => {
    messageType.forEach((message) => {
      errorMessageEl.append(`<h3>${message}</h3>`);
    });
  });
  },

});

export default DatabaseListView;
