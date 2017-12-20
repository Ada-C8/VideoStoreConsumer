import Backbone from 'backbone';
import _ from 'underscore';
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

      this.$('#catalog-movies').prepend(movieView.render().$el);
    });
  },

  // events: {
  //   'click button.btn-query': 'search',
  // },

  // search: function(e) {
  //   e.preventDefault();
  //   console.log("this . MODEL:")
  //   console.log(this.model);
  //
  //   console.log("this")
  //   console.log(this.$(`input[name='query']`).val())
  //
  //
  //   this.model.set('query', this.$(`input[name='query']`).val());
  //   this.render()
  // },


});

export default MovieListView;
