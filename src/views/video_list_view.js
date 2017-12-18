import Backbone from 'backbone';
import VideoView from 'views/video_view';
import DetailView from 'views/detail_view';


const VideoListView = Backbone.View.extend({
  initialize(parameters) {
    this.template = parameters.template;
    this.model = parameters.model;

    this.detailTemplate = parameters.detailTemplate;
  },
  render() {
    this.model.fetch({}).done(() => {
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
    'click button.btn-view': 'viewMe',
  },
  viewMe(event) {
    event.preventDefault();
    console.log('click');
    console.log(this.model);
    const video = this.model.findWhere({id: parseInt(event.currentTarget.id)});
    console.log(video)
    const detailView = new DetailView({
      // image_url: video.get('image_url'),
      template: this.detailTemplate,
      title: video.get('title'),
      el: '#video-view',
    });
    detailView.render();
  }
});

export default VideoListView;
