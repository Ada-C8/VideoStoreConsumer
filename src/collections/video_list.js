import Backbone from 'backbone';
import Video from 'models/video';


const VideoList = Backbone.Collection.extend({
  model: Video,
});

export default VideoList;
