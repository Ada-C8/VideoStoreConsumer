import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  // TODO: DO I need this parse function?
  parse: function(response){
    let movie = {
      title: response['title'],
      overview: response['overview']
    }
    return movie
  },
});

export default Movie;
