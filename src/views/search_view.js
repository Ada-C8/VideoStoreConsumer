import Backbone from 'backbone';
import $ from 'jquery';
import Movie from '../models/movie';
// import MovieList from '../collections/movie_list'
const SearchView = Backbone.View.extend({
  initialize(params){
    this.template = params.template;
    this.bus = params.bus;
    this.movies = params.movies;
    this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.bus,`${this.model.title}${this.model.release_date}`, this.setHave )
  },
  events: {
    'click #add-movie' : 'makePost',
  },
  render(){
    console.log('in render for search view');
    const movieData = {
      title: this.model.title,
      release_date: this.model.release_date}
    this.doWeHaveMovie(movieData)
    const compiledTemplate = this.template(this.model); //.toJSON());
    this.$el.html(compiledTemplate)
    return this
  }, // render
  doWeHaveMovie(movieData) {
    // console.log('in doWeHaveMovie');
    // console.log(movieData);
    this.bus.trigger('lookForMovie', movieData);
  }, // doWeHaveMovie
  setHave(haveIt) {
    console.log('in have it');
    if (haveIt) {
      console.log('in if');
      // console.log(this.model);
      this.model['have'] = true;
    } else {
      this.model['have'] = false;
    } // if
  }, // setHave
  makePost(){
    // TODO .post request to the rails API, $.post( "test.php", { name: "John", time: "2pm" } );
    // this.movies.add(this.model);
    // create a model so we can make a post request on it
    // from notes: $.post(url, formData, success: callback)
    const newMovie = new Movie(this.model);
    console.log('in makePost');
    // console.log(this.model);
    // console.log(newMovie);

    // set the url
    const url = 'http://localhost:3000/movies';

    // pull out the external_id from the views model to pass to the api
    const ex_id = this.model['external_id'];

    // make a post request to the api
    $.post(url, {movie: {external_id: ex_id }}).done((data) => {
      console.log('successful api call');
      // console.log(data);
      const newMovieDB = new Movie(data);
      console.log("making port to save");
      this.movies.add(newMovieDB)
      this.$('#have-movie').empty();
      this.$('#have-movie').append('Movie added')




  })
  // TODO: deal with failure case!

  }//makePost

});

export default SearchView
