import Backbone from 'backbone';
import Movie from '../models/movie';
import MovieList from '../collections/movie_list';

const MovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },
  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);

    return this;
  },
  events: {
    'click button.search': 'getMovie',
  },
  getMovie: function (e) {
    const title = this.$el.find('input').val();
    const movies = new MovieList({title: title});

    movies.fetch();
  }
});

export default MovieView;
