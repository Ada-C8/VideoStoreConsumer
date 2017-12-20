import Backbone from 'backbone';
import MovieView from './movie_view';

const MovieListView = Backbone.View.extend({
  initialize(params){
    this.template = params.template;
    this.bus = params.bus;

    this.listenTo(this.model, 'update', this.render);

    // listen for event from the searchView to check if the movie already exists in the local collection
    this.listenTo(this.bus, 'lookForMovie', this.checkCollectionForMovie);
  },
  render() {
    // console.log("inside render in movie list view");
    // console.log( this.model);
    this.model.each((movie) => {
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagName: 'tr',
      });
      this.$('#movies-list').append(movieView.render().$el);
    });
    return this
  }, // render
  checkCollectionForMovie(movieData) {
    console.log('in checkCollectionForMovie');
    console.log(movieData);
    let haveIt = false;
    this.model.each((movie) => {
      if (movie.get('title') === movieData.title && movie.get('release_date') === movieData.release_date ) {
        haveIt = true;
        console.log('we have the movie');
      } // if
      this.bus.trigger(`${movieData.title}${movieData.release_date}`, haveIt)
    }) // .each


  }, // checkbox

});

export default MovieListView;
