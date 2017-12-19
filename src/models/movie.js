import Backbone from 'backbone';

let Movie = Backbone.Model.extend({
  defaults: {
  'title': 'DEFAULT TITLE',
  'overview': 'DEFAULT OVERVIEW',
  'release_date': 'DEFAULT RELEASE DATE',
  'image_url': "https://image.tmdb.org/t/p/w500",
  }
});

export default Movie;
