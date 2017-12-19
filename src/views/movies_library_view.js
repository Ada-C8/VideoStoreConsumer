import Backbone from 'backbone';
import MovieList from '../collections/movie_list';

// views
import MovieView from './movie_view'

const MoviesLibraryView = Backbone.View.extend({
  initialize(params){
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },
  render(){
    console.log(this);
    console.log('this is this.model');
console.log(this.model);
    this.model.each((movie) => {
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        className: 'movie',
        tagName: 'li',
      });
      console.log("rendering movie view");
      console.log('this is movie = ');
      console.log(movie);
      console.log(this.template);
      this.$('#movies').append(movieView.render().$el);
    });
    return this;
  },
});

export default MoviesLibraryView
