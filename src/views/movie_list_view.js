import Backbone from 'backbone';
import Movie from '../models/model';
import MovieView from './movie_view';

const MovieListView = Backbone.View.extend({
  initialize(params){
    this.template = params.template;
  },

  render(){
    this.$('#movies').empty()
    this.model.each((movie) => {
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagName: 'li',
        className: 'movie',
      });
      this.$('#movies').append(movieView.render().$el)
    })
    return this;
  },

});
 export default MovieListView;
