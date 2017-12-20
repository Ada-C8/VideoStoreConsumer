import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

// import StoreMovie from 'models/store_movie';
// import StoreMoviesView from 'models/store_movies';
import APIMovie from 'models/api_movie'
import StoreMovie from 'models/store_movie'


import APIMoviesView from '../views/api_movies_view'
import StoreMovieView from '../views/store_movie_view';

import APIMovies from 'collections/api_movies'
import StoreLibrary from '/collections/store_library';

const APIMovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },
  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    // 'click .submit-btn': 'keywordSearch',
    'click .add-movie-btn': 'addMovieToLibrary',
  },

  addMovieToLibrary: function() {
    const newStoreMovie = new StoreMovie({
      title: this.model.attributes.title,
      release_date: this.model.attributes.release_date,
      overview: this.model.attributes.overview,
      image_url: this.model.attributes.image_url
    });

    let duplicate = false;
    this.storeLibrary.forEach(function(storeMovie) {
      if (storeMovie.attributes.title === newStoreMovie.attributes.title) {
        duplicate = true;
      }
    });
    if (duplicate === true) {
      this.failureMessages({duplicate: ['This film is already in your library.']});
    } else {
      if (newStoreMovie.isValid()) {
        newStoreMovie.save();
        this.storeLibrary.add(newStoreMovie);
        this.$el.empty();
        this.successMessages(`${newStoreMovie.attributes.title} has been successfully added to your rental library.`);
      } else
      this.failureMessages(newStoreMovie.validationError);
    }
  },

  failureMessages: function(messageHash) {
    const statusMessagesEl = $('.errors');
    statusMessagesEl.empty();
    _.each(messageHash, (messageType) => {
      messageType.forEach((message) => {
        statusMessagesEl.append(`<li>${message}</li>`);
      })
    });
  },
  successMessages: function(message) {
    console.log('this was a success');
    const statusMessagesEl = $('.errors');
    statusMessagesEl.empty();
    statusMessagesEl.append(`<li>${message}</li>`);
  }

});

export default APIMovieView;
