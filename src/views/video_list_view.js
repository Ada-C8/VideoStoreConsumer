import Backbone from 'backbone';
import VideoView from 'views/video_view';


const VideoListView = Backbone.View.extend({
  initialize(parameters) {
    this.template = parameters.template;
    this.model = parameters.model;

  },
  render() {
    this.model.fetch({}).done(() => {
      console.log(this.model);
      this.$('#rental-list').empty();
      this.model.each((video) => {
        const videoView = new VideoView({
          model: video,
          template: this.template,
          tagName: 'tr',
          className: 'video-item',
        });
        this.$('#rental-list').append(videoView.render().$el);
      });
      return this;

    }).fail(() => {
      console.log('not working');
    })
  },
  events: {
    // click add to library
  },
});

export default VideoListView;
