import Backbone from 'backbone';

const MovieDbMovieListView = Backbone.View.extend({
  this.template = params.template,
  urlRoot: 'https://api.themoviedb.org/3/search/movie?api_key=f1bf8df60928b99ccf8a64792e64587f&query=thor'
  },
  render() {
    this.model.each((movie) => {
      const movieDbMovieView = new MovieDbMovieView({
        model: movie,
        template: this.template
      })
    })
  }
});

export default MovieDbMovieListView
