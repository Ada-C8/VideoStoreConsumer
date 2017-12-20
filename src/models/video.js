import Backbone from 'backbone';

const Video = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/movies',
  defaults: {
    in_library: false,
  },

});

export default Video;
