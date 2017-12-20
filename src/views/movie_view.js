import Backbone from 'backbone';

import Movie from '../models/movie';


const MovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
  },

  render(args) {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    if (args.button) {
      this.$el.append('<button id="btn-add-to-lib">Add Me!</button>')
    }
    return this;
  },

  events: {
    'click button#btn-add-to-lib': 'addLib',

  },

  addLib: function(e) {
    e.preventDefault();
    const newMovie = new Movie ({
      title: this.model.get('title'),
      release_date: this.model.get('release_date'),
    })

    newMovie.save({}, {
      success: this.successSave.bind(this),
      error: this.failSave.bind(this),
    });
  },

  successSave: function(newMovie) {
    const statusMessage = `${newMovie.attributes.title} added to rental list!`;
    this.bus.trigger('updateStatusMessage', statusMessage);
  },

  failSave: function(newMovie) {
    const statusMessage = `${newMovie.attributes.title} unable to add to rental list!`;
    this.bus.trigger('updateStatusMessage', statusMessage);
  },
})

export default MovieView;
