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

  },
  render(title, options = {}) {

    let movie = new Video({id: title});
    this.$el.find('#video-view').empty();
    if (options['flag']) {
      this.$el.find('#video-view').prepend(`<h2>Top Pick!</h2>`);
    }
    movie.fetch({}).done(() => {
      movie.set({in_library: true});
      this.$el.find('#video-view').append(this.template(movie.toJSON()));
      this.model = movie;
      this.checkOutForm(title);
      $('#checkout-form').show();
    }).fail(() => {

      movie.urlRoot += '/?query='
      movie.fetch({}).done(()=> {
        // this.$el.find('#video-view').empty();
        movie = movie.attributes[0];
        _.extend(movie, {inventory: 0, available_inventory: 0, in_library: false})
        this.model = movie;
        // console.log(movie);
        // this.$el.empty();
        this.$el.find('#video-view').append(this.template(movie));
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
    movie.save().done((response)=> {
      this.successfulAdd(response);
    }).fail(() => {
      this.failedAdd();
    });
  },
  successfulAdd(movie) {
    this.collection.add(movie);
    this.render(movie.title);
    $('#message').html(`<p>${movie.title} has been added to your rental library! </p>`)
  },
  failedAdd() {
    $('#message').html(`<p>Oops.. can't save to your rental library.</p>`)
  },
  checkOutForm(title) {
    this.$('button#confirm-checkout').attr('value', title);
    this.customerList.each((customer) => {
      const name = customer.get('name');
      const id = customer.get('id');
      this.$('select').append(`<option value=${id}>${name}</option>`);
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
      this.render(event.currentTarget.value);
      $('#message').html(`<p>${event.currentTarget.value} has been checked out </p>`)
    }).fail((response) => {
      console.log(response)
        $('#message').html(`<p>This movie can't be checked out</p>`)
    });
  },
});

export default Detail;
