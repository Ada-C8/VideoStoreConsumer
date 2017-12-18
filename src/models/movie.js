import Backbone from 'backbone';

let Movie = Backbone.Model.extend({
  defaults: {
  'title': 'DEFAULT TITLE',
  'overview': 'DEFAULT OVERVIEW',
  'release_date': 'DEFAULT RELEASE DATE',
  }
});

export default Movie;
