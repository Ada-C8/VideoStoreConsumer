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
    'click input.movie-filter': 'searchMovies',
    // When the user clicks on <span> (x), close the modal
    'click span': 'modalHide',
    'click window': 'modalHide',
  },
  render(params){
    event.preventDefault();
    const movieListView = new MovieListView({
      el: '#movie-list',
      template: this.movieTemplate,
    });
    this.$('#movie-list').empty();
    this.model.each((movie)=>{

      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagName: 'div',
        className: 'movie',
      });
      this.listenTo(movieView, 'show_modal', this.modalDisplay);

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
  },

  modalDisplay() {
    this.$('.modal').addClass('show');
    this.$('.modal').removeClass('hidden');
    console.log('changed modal display to block')
  },

  modalHide() {
    this.$('.modal').addClass('hidden');
    this.$('.modal').removeClass('show');
    console.log('changed modal display to hidden')
  },

});

export default MovieListView;
