import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
    this.collection = params.collection;

  },
  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click': 'showMovie',
  },
  showMovie(event){


    let selectedMovie = this.model.attributes;
    let selectedSummary = selectedMovie['overview'];

    // array of matching results
    let found = this.collection.where({overview: selectedSummary});

    let movie_data = {
      title: selectedMovie.title,
      overview: selectedMovie.overview,
      release_date: selectedMovie.release_date,
      image_url: selectedMovie.image_url,
    }

    if (found.length > 0) {
      movie_data['found'] = true;
    } else {
      movie_data['found'] = false;
    }

    console.log(movie_data);

    this.bus.trigger('addToCollection', movie_data);
  },
});

export default MovieView;
