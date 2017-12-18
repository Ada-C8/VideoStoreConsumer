import Backbone from 'backbone';
import Movie from '../models/model';
import MovieView from './movie_view';

const MovieListView = Backbone.View.extend({
  initialize(params){
    this.template = params.template;
  },

  // events: {
  //   'click button.btn-show': 'getRentalMovies',
  //   'click button.btn-search': 'getIndividualMovie',
  // },

  getRentalMovies() {
    //this.model.remove_all()
    //calls to the rails API, returns movies in RailsDB in JSON
    //iterate through each JSON object returned
    //const newMovie = new Movie(JSON)
    //this.add
    //this.render()
  },

  getIndividualMovie() {
    //destory collection??
    //this.model.remove_all()

    //const formData = getFormData()
    //call to rails, API passes query, which calls to Movie API, which returns anything matching query

    //const newMovie = new Movie(JSON)
    //this.add
    //this.render()
  },

  getFormData(){
    //get query from search box
  },

  render(){
    this.$('#movies').empty()
    this.model.each((movie) => {
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
