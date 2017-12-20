import Backbone from 'backbone';
import Movie from 'models/movie';
import MovieView from 'views/movie_view';
import Search from 'models/search';

const MovieListView = Backbone.View.extend({
  initialize(params){
    this.template = params.template;
  },

  events: {
    'click button.btn-show': 'getRentalMovies',
    'click button.btn-search': 'getIndividualMovie',
  },

  getRentalMovies() {
    event.preventDefault()

    this.model.each((movie) => {
      movie.remove();
      movie.destroy();
    })

    console.log(" all rental movies");

    //calls to the rails API, returns movies in RailsDB in JSON
    const movieList = this.model.fetch()
    movieList.then(() => {
      movieList.responseJSON.forEach((movie) => {
        const newMovie = new Movie({
        title: movie.title,
        overview: movie.overview,
        release_date: movie.release_date,
        image_url: movie.image_url,
      });
        // this.model.add(newMovie)
      });
      console.log(this.model);
      this.render();
    })
  },

  getIndividualMovie() {
    event.preventDefault();
    this.model.each((movie) => {
      movie.remove();
      movie.destroy();
    })

    const query = this.getFormData();

    const newSearch = new Search({query: query})

    newSearch.url += newSearch.attributes.query

    const results = newSearch.fetch()

    results.then(() => {
      results.responseJSON.forEach((movie) => {
        console.log('inforeach loop');
        console.log(movie);
        const newMovie = new Movie({
        title: movie.title,
        overview: movie.overview,
        release_date: movie.release_date,
        image_url: movie.image_url,
      });
        this.model.add(newMovie)
      });
      console.log('about to render');
      this.render();
    })
  },

  getFormData(){
    return this.$('input#query').val()
  },

  render(){
    this.$('#movies').empty()
    this.model.forEach((movie) => {
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
