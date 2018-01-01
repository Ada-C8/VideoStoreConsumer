import Backbone from 'backbone';
import _ from 'underscore';
import Movie from '../models/movie';

const MovieDetailsView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.model = params.model;
    // Listen to changes in the model and call render when they occur.
    this.listenTo(this.model, "change", this.render);
  },
  events: {
    'click button.btn-all-movies': 'showRentalsLibrary',
    'click button.btn-add-movie': 'addMovie',
    'click button.btn-search': 'searchMovies',
  },
  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  showRentalsLibrary(event) {
    console.log(this.$el);
    // hiding the Movie Details View
    this.$el.hide();

  },
  addMovie() {
    console.log('in Add Movie');
    // console.log(this.model);

    const movieData = this.model.attributes;
    console.log('MOVIE DATA:');
    console.log(movieData);

    this.model.save();
    console.log('the movie saved');

    //alert(`Woohoo! ${this.model.attributes.title} is now added to the rental library!`);
  },
  searchMovies: function(event) {
    event.preventDefault();
    this.$('.movies-container h2').html('Results');
    console.log('INSIDE MOVIE VIEW: searchMovies');
    this.$('#movie-details-container').hide();
    this.$('#results-container').show();

    const query = this.$('input[name=movie-query]').val();
    this.model.search(query);
  },
});

export default MovieDetailsView;
