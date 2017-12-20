import Backbone from 'backbone';
import MovieList from '../collections/movie_list';

// views
import MovieView from './movie_view'

const MoviesLibraryView = Backbone.View.extend({
  initialize(params){
    this.template = params.template;
    this.listenTo(this.model, 'update reset', this.render);
  },
  render(){
    this.$('#movies').empty();

    this.model.each((movie) => {
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        className: 'movie',
        tagName: 'li',
      });

      this.$('#movies').append(movieView.render().$el);
    });
    return this;
  },
});

export default MoviesLibraryView
