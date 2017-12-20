import Backbone from 'backbone';
import Movie from '../models/movie';
import MovieList from '../collections/movie_list'


const MovieView = Backbone.View.extend({
  initialize(params){
    this.template = params.template;
    this.listenTo(this.model, 'change', this.render)
  },
  render(){
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click button.btn-add': 'add'
  },
  add(event){
    event.preventDefault();

    let newMovieObject = this.model.attributes;

    console.log(newMovieObject);
    let newMovie = new Movie(newMovieObject);
    console.log(newMovie);
    // if(!newMovie.isValid()){
    //   $('.display-status').html('')
    //   $('.display-status').html(`${newTrip.validationError}`);
    //   modalDisplay();
    // }
    this.model.add(newMovie);
  },
});

export default MovieView;
