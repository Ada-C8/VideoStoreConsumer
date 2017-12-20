import Backbone from 'backbone';
import Movie from 'models/movie';

const MovieList = Backbone.Collection.extend({
  model: Movie,
  url: "http://localhost:3000/movies",
 //  byImageUrl: function (image_url) {
 //     filtered = this.filter(function (movie) {
 //         return movie.get("image_url") === image_url;
 //     });
 //     return new Movie(filtered);
 // }
});

export default MovieList;
