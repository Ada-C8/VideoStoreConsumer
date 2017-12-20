import Backbone from 'backbone';

import Movie from 'models/movie';

const VendorList = Backbone.Collection.extend({
  model: Movie,
  url: 'http://localhost:3000/movies',
});

export default VendorList;
