import Backbone from 'backbone';
import Video from 'models/video';


const VideoList = Backbone.Collection.extend({
  model: Video,
  url: 'localhost:3000',
});

export default VideoList;
