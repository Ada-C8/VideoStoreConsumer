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
      // this.model = movie;
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
    'click button#confirm-checkout.button': console.log('checkout'),
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
  },
  successfulAdd(movie) {
    this.collection.add(movie);
    this.render();
    $('#message').html(`<p>${movie.title} has been added to your rental library! </p>`)
  },
  failedAdd(movie) {
    $('#message').html(`<p>Oops.. can't save to your rental library.</p>`)
  },
  checkMeOut(event) {
    event.preventDefault();
    console.log(event);
  },
});

export default Detail;
