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
    this.detailTemplate = parameters.detailTemplate;
    this.listenTo(this.model, 'sortMe', this.render);
    this.listenTo(this.model, 'update', this.render);
    // this.listenTo(this.model, 'change', this.render);
    // this.listenTo(this.model, 'update', this.render);
  },
  render(list) {
    if (!list) {
      list = this.model.models;
    }
    console.log(list.length)
    // this.model.fetch({}).done(() => {
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

    // }).fail(() => {
    //   console.log('not working');
    // })
  },
  events: {
    'click tr.video-item': 'viewMe',
    'keyup input[type=text]': 'filterMe',
    'click input.btn-search': 'searchMe',
    'click button.btn-checkout': 'checkMeOut',
  },
  viewMe(event) {
    // event.preventDefault();
    // console.log();
    // const video = this.model.findWhere({id: parseInt(event.currentTarget.id)});
    const detailView = new DetailView({
      // image_url: video.get('image_url'),
      template: this.detailTemplate,
      title: event.currentTarget.firstElementChild.innerText,
      el: '#video-view',
      collection: this.model,

    });
    detailView.render();
  },
  filterMe(event) {
    console.log(event);
    event.preventDefault();
    // filter rental list
    console.log('filtering');
    const input = event.target.value;
    console.log(input)
    const newList = this.model.filterList(input);
    this.model.trigger('sortMe', newList);

    // Search if you hit enter
    if (event.keyCode == 13) {
      this.searchMe(event);
    }
  },
  searchMe(event) {
    event.preventDefault();
    console.log(event)
    const input = $('input[type=text]')["0"].value;
    console.log($('input[type=text]'))
    console.log('you hit enter');
    const movieList = new Video({id: input});
    movieList.urlRoot += '/?query='
    movieList.fetch({}).done(()=> {
      console.log(movieList);
      // movieList.set('in_library', false)
      this.model.trigger('sortMe', new VideoList(Object.values(movieList.toJSON())));

    });
  },
  checkMeOut(event) {
    // title: event.currentTarget.firstElementChild.innerText,
    // Show the form
    // decrement number of available movies

    this.customerList.each((customer) => {
      const name = customer.get('name')
      console.log(name);
      $('select').append(`<option value=${name}>${name}</option>`);
    });
    return this;
  }
});

export default VideoListView;
