import Backbone from 'backbone';
import StoreMovie from 'models/store_movie';

const StoreLibrary = Backbone.Collection.extend({
  model: StoreMovie,
  urlRoot: 'http://localhost:3000/movies',
});

export default StoreMovie;
