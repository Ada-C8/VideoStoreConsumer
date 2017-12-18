import Backbone from 'backbone';
import VideoView from 'views/video_view';
import DetailView from 'views/detail_view';


const VideoListView = Backbone.View.extend({
  initialize(parameters) {
    this.template = parameters.template;
    this.model = parameters.model;

    this.detailTemplate = parameters.detailTemplate;
    this.listenTo(this.model, 'sortMe', this.render);
    // this.listenTo(this.model, 'change', this.render);
    // this.listenTo(this.model, 'update', this.render);
  },
  render(list) {
    console.log(this.model);
    console.log(list);
    if (!list) {
      list = this.model.models;
    }
    // this.model.fetch({}).done(() => {
      this.$('#rental-list').empty();
      list.forEach((video) => {
        const videoView = new VideoView({
          model: video,
          template: this.template,
          tagName: 'tr',
          className: 'video-item',
        });
        this.$('#rental-list').append(videoView.render().$el);
      });
      return this;

    // }).fail(() => {
    //   console.log('not working');
    // })
  },
  events: {
    'click button.btn-view': 'viewMe',
    'keyup input[type=text]': 'filterMe',
    // 'keypress input[type=text]': ''
  },
  viewMe(event) {
    event.preventDefault();
    const video = this.model.findWhere({id: parseInt(event.currentTarget.id)});
    const detailView = new DetailView({
      // image_url: video.get('image_url'),
      template: this.detailTemplate,
      title: video.get('title'),
      el: '#video-view',
    });
    detailView.render();
  },
  filterMe(event) {
    event.preventDefault();
    // filter rental list
    console.log('filtering');
    // console.log()
    console.log( this.model.filterList(event.target.value))
    // this.model.filterList(event.target.value).render();
    const newList = this.model.filterList(event.target.value);
    this.model.trigger('sortMe', newList);
    // Search if you hit enter
    if (event.keyCode == 13) {
      console.log('you hit enter');
    }
  },
});

export default VideoListView;
