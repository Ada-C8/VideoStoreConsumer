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
    this.model.reset();

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
      });
      console.log(this.model);
      this.render();
      this.$('.btn-add').hide();
    })
  },

  getIndividualMovie() {
    event.preventDefault();
    this.model.reset();

    const query = this.getFormData();
      if (query === "") {
        this.$('#movies').empty();
        this.$('#movies').append('Please enter a movie')
      }

    const newSearch = new Search({query: query})

    newSearch.url += newSearch.attributes.query

    const results = newSearch.fetch()

    results.then(() => {
      console.log(results.responseJSON);
      if(results.responeJSON === undefined) {
        console.log('in here');
        console.log(this.$('ul#movies.movies'));
        this.$("p").html('');
        this.$el.append('<p> no movies match that search term </p>')
      }

      results.responseJSON.forEach((movie) => {
        this.$("p").html('');

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
