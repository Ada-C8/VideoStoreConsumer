import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';
import Video from '../models/video';


const Detail = Backbone.View.extend({
  initialize(parameters) {
    this.template = parameters.template;
    // this.title = parameters.title;
    this.collection = parameters.collection;
    this.customerList = parameters.customerList;
    this.bus = parameters.bus;

    this.listenTo(this.bus, 'selectedVideo', this.render);
    // this.listenTo(this.model,)
    // this.image = parameters.image_url;
  },
  render(title) {
    console.log(title);
    let movie = new Video({id: title});
    this.$el.find('#video-view').empty();

    movie.fetch({}).done(() => {
      movie.set({in_library: true})
      // this.model = movie;

      this.$el.find('#video-view').html(this.template(movie.toJSON()));
      // $('#video-view').append('<h1>hi</h1>')
      // this.model = movie;
      this.checkOutForm(title);
      $('#checkout-form').show();
      // this.$('button#confirm-checkout').attr('value', this.title)
    }).fail(() => {

      movie.urlRoot += '/?query='
      movie.fetch({}).done(()=> {
        this.$el.find('#video-view').empty();
        movie = movie.attributes[0];
        _.extend(movie, {inventory: 0, available_inventory: 0, in_library: false})
        // this.model = movie;
        // console.log(movie);
        // this.$el.empty();
        this.$el.find('#video-view').html(this.template(movie));
        // this.model = movie;
        this.$el.find('#checkout-form').hide();
      });
    })
  },
  events: {
    'click button.btn-add': 'addMe',
    'click button#confirm-checkout.button': 'checkMeOut',
  },
  addMe(event) {
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
  checkOutForm(title) {
    this.$('button#confirm-checkout').attr('value', title);
    this.customerList.each((customer) => {
      const name = customer.get('name');
      const id = customer.get('id');
      this.$('select').append(`<option value=${id}>${name}</option>`); //``<p>${name}</p>
    });
  },
  checkMeOut(event) {
    event.preventDefault();
    const day = new Date()
    const due = new Date(day.getFullYear(), day.getMonth(), day.getDate()+7);
    const params = {customer_id: event.currentTarget.form["0"].value, due_date: due}
    const url = `http://localhost:3000/rentals/${event.currentTarget.value}/check-out`
    console.log(event)
    $.post( url, params, (response) => {
      console.log('rent me!')
      // this.model.save({inventory: this.model.get('inventory') - 1}, {patch: true});
      // console.log(this.model);
      this.render(event.currentTarget.value);
      // this.successfulAdd(response);
    }).fail(() => {
        // this.failedAdd();
        console.log('oops')
    });
  },
});

export default Detail;
