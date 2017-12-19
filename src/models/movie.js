import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  url: function() {
    return `http://localhost:3000/movies/?query=${this.get('requested_movie')}`;
  },
});

export default Movie;

// singleTrip.fetch({
//     success: (model, response) => {
//       console.log('Model: ' + singleTrip.parse(model));
//       console.log('Response: ' + response);
//       showTrip(model);
//     },
