import Backbone from 'backbone';
import $ from 'jquery';
import Video from '../models/video';

const Detail = Backbone.View.extend({
  initialize(parameters) {
    this.template = parameters.template;
    this.title = parameters.title;
    // this.image = parameters.image_url;
  },
  render() {
    // fetch movie details
    // console.log(this.image)
    const movie = new Video({id: this.title});
    console.log(movie);
    movie.fetch({}).done(() => {
      // console.log(this.template);
      this.$el.empty();
      this.$el.html(this.template(movie.toJSON()));
      // $('#video-view').append('<h1>hi</h1>')
    }).fail(() => {
      console.log('oops');
    })
  },
  events: {

  },
});

export default Detail;
