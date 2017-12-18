import Backbone from 'backbone';

const StoreMovie = Backbone.Model.extend({
  idAttribute: 'title',
  urlRoot: 'http://localhost:3000/movies',

});

export default StoreMovie;
