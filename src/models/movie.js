import Backbone from 'backbone';

let Movie = Backbone.Model.extend({
  defaults: {
  'title': 'DEFAULT TITLE',
  'overview': 'DEFAULT OVERVIEW',
  'release_date': 'DEFAULT RELEASE DATE',
//  'image_url': "http://lorempixel.com/185/278/",
  }
});

export default Movie;
