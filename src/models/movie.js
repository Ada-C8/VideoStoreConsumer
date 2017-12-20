import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  initialize(attributes){
    url: 'http://localhost:3000/movies'
  },
  parse: function(response){
    let movie = {
      title: response['title'],
      overview: response['overview']
    }
    return movie
  },
});

export default Movie;
