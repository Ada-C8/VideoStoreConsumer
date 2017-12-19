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
    console.log(" all rental movies");
    //this.model.remove_all()
    this.model.refresh();
    
    //calls to the rails API, returns movies in RailsDB in JSON
    const movieList = this.model.fetch()
    movieList.then(() => {
      movieList.responseJSON.forEach((movie) => {
        const newMovie = new Movie({
        title: movie.title,
        overview: movie.description,
        release_date: movie.release_date,
        image_url: movie.image_url,
      });
        this.model.add(newMovie)
      });
      this.render();
    })
  },

  getIndividualMovie() {
    event.preventDefault()
    //destory collection??
    //this.model.remove_all()
    this.model.refresh();

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
//is it getting into this forEach loop??
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
