import Backbone from 'backbone';
import MovieView from '../views/movie_view'

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },

  render() {
    this.$('#catalog-movies').empty();
    this.model.forEach((movie) => {
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagName: 'li',
        className: 'movie'
      });
      this.$('#catalog-movies').append(movieView.render().$el);
    })
  },
  // events: {
  //   'click button.btn-query': 'search',
  // },
  // search: function(query) {
  // },


});

export default MovieListView;
