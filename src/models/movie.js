import Backbone from 'backbone';

const Movie = Backbone.Model.extend({
  defaults: {
    title: 'UNDEF',
    overview: 'RANDOM',
    release_date: '01-01-01',
    image_url: 'bogus.jpg'
  }
});

export default Movie
