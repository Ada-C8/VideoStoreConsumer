import Backbone from 'backbone';
import MovieView from './movie_view';
import $ from 'jquery';
// import Movie from '../models/movie';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;

  },
  render() {
    console.log('IN RENDER');
    console.log(this.model);
    this.$('#list').empty();

    this.model.fetch({}).done(() => {

      this.model.each((movie) => {
        const movieView = new MovieView({
          model: movie,
          template: this.template,
          tagName: 'li',
          className: 'movie',
        });
        this.$('#list').append(movieView.render().$el);
      })
      return this;
    });
  },
  submit(event) {
    event.preventDefault();

    const searchType = this.$('input[name=search-type]:checked').val();
    const searchTerm = this.$('input[name=search]').val().toUpperCase();
    const regSearchTerm = this.$('input[name=search]').val();

    if (searchType === 'search inventory') {
      // refactor these into two seperate methods??
      this.model.fetch({}).done(() => {
      const movieList = this.model.models;
      const filteredMovies = movieList.filter(movie => movie.get('upperCaseTitle').includes(searchTerm));

      this.$('#list').empty();

      filteredMovies.forEach((movie) => {
        const movieView = new MovieView({
          model: movie,
          template: this.template,
          tagName: 'li',
          className: 'movie',
        });
        this.$('#list').append(movieView.render().$el);
        $('.add-inventory').hide();
      });
      return this;
    });
    } else {
      console.log('Searching Imdb...');
      this.$('#list').empty();
      const imdbList = this.model.fetch({data: {query: regSearchTerm}});
      imdbList.then((data, status, response) => {

        this.model.models.forEach((movie) => {
          const movieView = new MovieView({
            model: movie,
            template: this.template,
            tagName: 'li',
            className: 'imdb-movie',
          });
          this.$('#list').append(movieView.render().$el);
        });
      });
    }
  },
  events: {
    'click #movie-button': 'render',
    'click #searchButton': 'submit'
  }
});

export default MovieListView;
