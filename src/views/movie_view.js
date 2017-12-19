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
    // console.log('we are adding things to our library database');
    // let movieData = this.model.attributes;
    // // this.model.add(movieData);
    // const newMovie = new Movie(movieData);
    // if (newMovie.isValid()) {
    //   MovieList.add(newMovie)
    //   newMovie.save({
    //
    //   });
    // }
    // const saveMovie = function saveMovie(event){
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
    newMovie.save( {}, {
      success: (model, response) => {
        const movieSuccess = ' successfully added  a trip!';
        console.log(movieSuccess);
        $('.display-status').html('')
        console.log(response);
        // $('.display-status').html(response.name + tripSuccess);
        // $('#add-trip-form').remove();
        // modalDisplay();
        // reportStatus('success', 'Successfully added reservation!');
      },
      error: (model, response) => {
        const movieFailure = 'Failed to save trip! Server response:';
        // console.log(`validationError ${response.attributes['validationError']}`);
        // $('.display-status').html('')
        console.log(response.errors);
        // $('.display-status').html(tripFailure);
        // modalDisplay();
      },
    });
  },
});

export default MovieView;
