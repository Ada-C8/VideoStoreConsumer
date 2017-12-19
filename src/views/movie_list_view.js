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
    'click input.movie-filter': 'searchMovies'
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
    let query = this.$('#movie-field').val();
    const movieListView = new MovieListView({
      el: '#movie-list',
      template: this.movieTemplate,
      query: this.query,
      query: query,
    });
    // this.$el.empty();
    this.$('#movie-list').empty();
    this.model.each((movie)=>{

      const movieView = new MovieView({
        model: movie,
        // el: '#single-movie',
        template: this.template,
        tagName: 'div',
        className: 'movie',


      });

      this.$('#movie-list').append(movieView.render().$el);

    });
    return this;
  },
  searchMovies(event){
    event.preventDefault();
    console.log('in search movies');
    this.model.fetchSearch({
      query: this.$('#movie-field').val(),
      success: function(query, response){console.log('response');},
    });
  }
});

export default MovieListView;
