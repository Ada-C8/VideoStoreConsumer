import Backbone from 'backbone';

const MovieDbMovieView = Backbone.View.extend({
  initialize(params) {
    urlRoot: 'https://api.themoviedb.org/3/search/movie?api_key=f1bf8df60928b99ccf8a64792e64587f&query=thor'
  },
  render() {
    this.model.each(())
  }
});

export default MovieDbMovieView
