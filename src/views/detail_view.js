import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';
import Video from '../models/video';


const Detail = Backbone.View.extend({
  initialize(parameters) {
    this.template = parameters.template;
    this.title = parameters.title;
    this.collection = parameters.collection;

    // this.image = parameters.image_url;
  },
  render() {
    // fetch movie details
    // console.log(this.image)
    console.log(this.title);
    let movie = new Video({id: this.title});
    // console.log(movie);
    movie.fetch({}).done(() => {
      // console.log(this.template);
      movie.set({in_library: true})
      this.$el.empty();
      this.$el.html(this.template(movie.toJSON()));
      // $('#video-view').append('<h1>hi</h1>')
      this.model = movie;
    }).fail(() => {

      movie.urlRoot += '/?query='
      movie.fetch({}).done(()=> {
        movie = movie.attributes[0];
        _.extend(movie, {inventory: 0, available_inventory: 0, in_library: false})
        this.$el.empty();
        this.$el.html(this.template(movie));
        this.model = movie;
      });
    })
  },
  events: {
    'click button.btn-add': 'addMe',
  },
  addMe(event) {
    console.log(this.collection.length);
    const movie = new Video(this.model);
    movie.save({}, {
      success: this.successfulAdd,
      error: this.failedAdd,
    });
    // this.render();
  },
  successfulAdd(movie) {
    this.collection.add(movie);
    console.log(this.collection.length);

  },
  failedAdd(movie) {
    console.log('boo');
    movie.destroy();

  }

});

export default Detail;
