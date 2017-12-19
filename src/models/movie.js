import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  defaults: {
  },
  initialize(attributes) {
    // title: attributes["title"];
    // overview: attributes["overview"];
    // release_date: attributes["release_date"];
    // image_url: attributes["poster_path"];
    // external_id: attributes["id"];
  },
  validate(attributes) {
  },
  url: `http://localhost:3000/movies/`,
  parse: function(response) {
    // let movie = {
    //   title: response["title"],
    //   overview: response["overview"],
    //   release_date: response["release_date"],
    //   image_url: response["poster_path"],
    //   external_id: response["id"],
    // }
    // console.log(movie);
    // return movie;
    return response;
  },
  comparator: 'title',
});

export default Movie;
