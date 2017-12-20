import Backbone from 'backbone';

import Movie from '../models/movie';

const MovieList = Backbone.Collection.extend({
  model: Movie,
  url: 'http://localhost:3000/movies',
  comparator: 'title',

  validate(attributes) {
  },

  myWhere : function( key, val ){
    return this.filter( function( item ){
      return item.get( key ).toLowerCase() === val.toLowerCase();
    });
  },
});


export default MovieList;
