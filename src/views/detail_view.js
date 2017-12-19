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
      this.model = movie;
      this.$el.empty();
      this.$el.html(this.template(movie.toJSON()));
      // $('#video-view').append('<h1>hi</h1>')
      this.model = movie;
    }).fail(() => {

      movie.urlRoot += '/?query='
      movie.fetch({}).done(()=> {
        movie = movie.attributes[0];
        _.extend(movie, {inventory: 0, available_inventory: 0, in_library: false})
        this.model = movie;
        // console.log(movie);
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
    // let url = movie.urlRoot += '/?' + 'title=' + movie.get('title') + '&release_date='  + movie.get('release_date');

    let params = {title: movie.get('title'), release_date: movie.get('release_date')}

    $.post( movie.urlRoot, params, (response) => {
      this.successfulAdd(response);
    }).fail(() => {
        this.failedAdd();
    });
    // movie.save({}, {
    //   success: this.successfulAdd,
    //   error: this.failedAdd,
    // });
    //
  },
  successfulAdd(movie) {
    console.log(movie)
    this.collection.add(movie);
    // this.collection.trigger('update');
    // console.log(this.collection.length);
    this.render();
    console.log(this.collection)
  },
  failedAdd(movie) {
    console.log('boo');
    movie.destroy();

  }
});

export default Detail;
