import Backbone from 'backbone';
import MovieList from '../collections/movie_list';
import Movie from '../models/movie';
import MovieView from './movie_view';


const MovieListView = Backbone.View.extend({
  initialize(params){

    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },
  events:{
    'click movie-filter': 'render'
  },
  // renderQuery(params){
  //
  //   movieListView = new MovieListView({
  //     query: this.query,
  //     el: 'main',
  //     template: this.movieTemplate,
  //   });
  //
  // }
  render(params){
    event.preventDefault();
    debugger
    let query = this.$('#movie-field').val();
    const movieListView = new MovieListView({
      el: '#movie-list',
      template: this.movieTemplate,
      query: this.query,
      query: query,
    });
    console.log(query);
    console.log('query ^^^^');
    console.log(this);
    console.log('this is this^^^');
// this.$('#movie-list').empty();
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
