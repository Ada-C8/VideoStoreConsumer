import Backbone from 'backbone';
import Movie from 'models/movie';
import MovieList from 'collections/movie_list';

const ExternalMovieList = MovieList.extend({
  initialize (attributes) {
    this.title = attributes.title;
  },
  url() {
    console.log(this.baseUrl);
    return this.baseUrl + `/?query=${ this.title }`
  },

});

export default ExternalMovieList;
