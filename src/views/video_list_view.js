import Backbone from 'backbone';
import VideoView from 'views/video_view';
import DetailView from 'views/detail_view';
import $ from 'jquery';
import Video from 'models/video';
import VideoList from 'collections/video_list';


const VideoListView = Backbone.View.extend({
  initialize(parameters) {
    this.template = parameters.template;
    this.model = parameters.model;
    this.customerList = parameters.customerList;
    this.bus = parameters.bus;
    this.listenTo(this.model, 'sortMe', this.render);
    this.listenTo(this.model, 'update', this.render);
    // this.listenTo(this.model, 'change', this.render);
    // this.listenTo(this.model, 'update', this.render);
  },
  render(list) {
    if (!list) {
      list = this.model.models;
    }
      this.$('#rental-list').empty();
      list.forEach((video) => {
        if (video.get('title')) {
          if(this.model.findWhere({title: video.get('title')})) {
            video.set('in_library', true);
          }
          const videoView = new VideoView({
            model: video,
            template: this.template,
            tagName: 'tr',
            className: 'video-item',
          });
          this.$('#rental-list').append(videoView.render().$el);
        }
      });
      return this;
  },
  events: {
    'click tr.video-item': 'viewMe',
    'keyup input[type=text]': 'filterMe',
    'click input.btn-search': 'searchMe',
  },
  viewMe(event) {
    this.bus.trigger("selectedVideo", event.currentTarget.firstElementChild.innerText);
    // console.log(event.currentTarget.firstElementChild.innerText)
  },
  filterMe(event) {
    event.preventDefault();
    // filter rental list
    console.log('filtering');
    const input = event.target.value;
    const newList = this.model.filterList(input);
    this.model.trigger('sortMe', newList);

    // Search if you hit enter
    if (event.keyCode == 13) {
      this.searchMe(event);
    }
  },
  searchMe(event) {
    event.preventDefault();
    const input = $('input[type=text]')["0"].value;
    const movieList = new Video({id: input});
    movieList.urlRoot += '/?query='
    movieList.fetch({}).done(()=> {
      this.model.trigger('sortMe', new VideoList(Object.values(movieList.toJSON())));
    });
  },
});

export default VideoListView;
