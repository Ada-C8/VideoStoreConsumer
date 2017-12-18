import Backbone from 'backbone';
import MovieList from '../collections/movie_list';

const MovieLibraryView = Backbone.View.extend({
  initialize(params){
    this.template = params.template;
  },
  render(){
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

export default MovieLibraryView
