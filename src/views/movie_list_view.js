import Backbone from 'backbone';
import MovieView from './movie_view';
import Movie from '../models/movie';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },
  render() {
    this.$('ul').empty();
<<<<<<< HEAD

    console.log(this);
=======
>>>>>>> a4708bc919850c8e21009e3a5f8ae3bbea4c9117

    this.model.forEach((movie) => {
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagName: 'li',
        className: 'movie',
      });
      this.$(' ul').append(movieView.render().$el);
    });

    return this;
  },
  events: {
  },
});

export default MovieListView;
