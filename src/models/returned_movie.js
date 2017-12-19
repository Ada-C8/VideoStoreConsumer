import Backbone from 'backbone';

const returnedMovie = Backbone.Model.extend({
  url: function() {
    return 'http://localhost:3000/movies/?query=' + this.get('title');
  },
  parse: function(response){
    let movie = {
      title: response['title'],
      overview: response['overview']
    }
    return movie
  },
});

export default returnedMovie;
