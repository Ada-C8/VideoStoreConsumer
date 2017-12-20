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
    // trigger when user wants to add a movie to the rails DB
    'click #add-movie' : 'makePost',
  },
  render(){
    const movieData = {
      title: this.model.title,
      release_date: this.model.release_date}
      this.doWeHaveMovie(movieData)
      const compiledTemplate = this.template(this.model); //.toJSON());
      this.$el.html(compiledTemplate)
      return this
    }, // render
    doWeHaveMovie(movieData) {
      this.bus.trigger('lookForMovie', movieData);
    }, // doWeHaveMovie
    setHave(haveIt) {
      if (haveIt) {
        this.model['have'] = true;
      } else {
        this.model['have'] = false;
      } // if
    }, // setHave
    makePost(){

      // from notes: $.post(url, formData, success: callback)

      // set the url to make post request
      const url = 'http://localhost:3000/movies';

      // pull out the external_id from the views model to pass to the api
      const ex_id = this.model['external_id'];

      // make a post request to the api, passing the external Id to the API
      // this request goes to the create at the movies controller
      $.post(url, {movie: {external_id: ex_id }}).done((data) => {
        if (!data.empty()){
          // when the API was success create a new movie model with this data
          const newMovieDB = new Movie(data);
          // add the new movie model to the movie list collection
          this.movies.add(newMovieDB)
          // change the add movie buttom to movie added
          this.$('#have-movie').empty();
          this.$('#have-movie').append('Movie added')
        } else {
          const noResults = `<p> Can not add movie to the library </p>`
          this.bus.trigger('errorSavingMovie', noResults);
        }

      }).fail((data)=>{
        // if the API calls fails, shows error message
        const error = '<p> Error adding movie to the library</p>'
        this.bus.trigger('errorSavingMovie', error);
      })
    }//makePost

  });

  export default SearchView
