import Backbone from 'backbone';

const Video = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/movies',
  initialize(parameters){

  },
  validate() {
    // Check that its not already in the library
    // Check that the data is valid
    // Check that the movie indeed comes from the imdb library ?
  }
});

export default Video;
