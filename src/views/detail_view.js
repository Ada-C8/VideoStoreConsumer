import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';
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
    let movie = new Video({id: this.title});
    console.log(movie);
    movie.fetch({}).done(() => {
      // console.log(this.template);
      movie.set({in_library: true})
      this.$el.empty();
      this.$el.html(this.template(movie.toJSON()));
      // $('#video-view').append('<h1>hi</h1>')
    }).fail(() => {

      movie.urlRoot += '/?query='
      movie.fetch({}).done(()=> {
        movie = movie.attributes[0];
        console.log(movie);
        _.extend(movie, {inventory: 0, available_inventory: 0, in_library: false})
        this.$el.empty();
        this.$el.html(this.template(movie));
      });
    })
  },
  events: {

  },
});

export default Detail;
