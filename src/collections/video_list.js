import Backbone from 'backbone';
import Video from 'models/video';


const VideoList = Backbone.Collection.extend({
  model: Video,
  url: 'http://localhost:3000/movies',
  filterList(input) {
    const typing = input.toLowerCase();
    const newList = this.select(function(movie) {
      return movie.get('title').toLowerCase().includes(typing);
    });
    return newList;
  },

});

export default VideoList;
