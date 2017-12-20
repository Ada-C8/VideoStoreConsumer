import Backbone from 'backbone';
import MovieList from '../collections/movie_list';

// views
import MovieView from './movie_view'

const MoviesLibraryView = Backbone.View.extend({
  initialize(params){
    this.template = params.template;
    this.listenTo(this.model, 'update reset', this.render);
    this.listenTo(this.model, 'click', this.show)
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
  events: {
    'click button.view-library-btn': 'show'
  },
  show() {
    console.log('I am in show()');
    this.model.trigger('click')
    this.$('#movies-container').show()
  }
});

export default MoviesLibraryView
