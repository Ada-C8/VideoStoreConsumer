import Backbone from 'backbone';

const returnedMovie = Backbone.Model.extend({
  initalize(bus){
    this.bus = bus;
  },
  urlRoot: 'http://localhost:3000/movies',
  parse: function(response){
    return response.responseJSON;
  },
});

export default returnedMovie;
