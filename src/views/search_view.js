import Backbone from 'backbone';
import Search from '../models/search';

const SearchView = Backbone.View.extend({

  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'change', this.render);
    this.bus = params.bus
  },
  events: {
  },

  render() {
    let search = this.model;
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    console.log(this.model.attributes)

    return this;
  },

  events: {
    'click button': 'addMovie',
  },

  addMovie(){
    console.log('I am in add movie')
    console.log(this.model)
    let movie_hash = this.model.attributes
    console.log(movie_hash)
    this.bus.trigger('addMovieDB', movie_hash)
  }




});

export default SearchView;
