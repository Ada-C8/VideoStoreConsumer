import Backbone from 'backbone';
import MovieList from '../collections/movie_list';
import Movie from '../models/movie';
import MovieView from './movie_view';


const MovieListView = Backbone.View.extend({
  initialize(params){
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },
  render(){
    const movieListView = new MovieListView({
      el: '#main-content',
      template: this.movieTemplate
    });

    this.$el.empty();
    console.log(this);
    console.log('this is this^^^');

    this.model.each((movie)=>{

      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagName: 'div',
        className: 'movie',
      });

      this.$el.append(movieView.render().$el);

    });
    return this;
  },
});

export default MovieListView;
