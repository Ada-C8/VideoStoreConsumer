import Backbone from 'backbone';
import _ from 'underscore';

import MovieView from '../views/movie_view';
import Movie from '../models/movie';

const FormView = Backbone.View.extend({
  initialize(params) {
    // this.template = params.template;
    this.bus = params.bus;
    this.model = params.model;
  },
  events: {
    'click button.find-movie' : 'findMovie',
    'click button.show-all' : 'showAllMovies'
  },
  showAllMovies: function(e) {
    e.preventDefault();
    // if (this.$('#movies').hasClass('fetched')) {
    //   this.$('#movies').toggle();
    // } else {
    //   this.model.fetch();
    //   this.$('#movies').addClass('fetched');
    // }
    this.$('#movies-container').toggle();
  },
  findMovie: function(e) {
    e.preventDefault();
    const title = this.$('input').val().toUpperCase();
    let result = this.model.findWhere({upperCaseTitle: title});
    // let movie;
    // if(this.$('#movies').hasClass('fetched')) {
    //   result = this.model.findWhere({upperCaseTitle: title});
    //   // debugger;
    // } else {
    //   this.model.fetch();
    //   this.$('#movies').addClass('fetched');
    //   result = this.model.findWhere({title: title});
    // 
    // }
    // debugger;
    if (result ) {
      console.log(`displayMyDetails${result.get('id')}`);
      this.bus.trigger(`displayMyDetails${result.get('id')}`, result);

    } else {
      result = searchTMDB(title);
    }
  },
  searchModel: function(title) {
    const movie = this.model.findWhere({uppercasedTitle: title});
    return movie
  },
  searchTMDB: function(title) {

  }

});

export default FormView;
