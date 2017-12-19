import Backbone from 'backbone';

import MovieView from './movie_view';

const LibraryView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.model = params.model;
    this.listenTo(this.model, 'update', this.render);
  },
  render() {
    this.$('#movie-list').empty();
    this.model.each((movie) => {
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagName: 'li',
        className: 'movie',
      });
      this.$('#movie-list').append(movieView.render().$el);
    });
    return this;
  }
});

export default LibraryView;
