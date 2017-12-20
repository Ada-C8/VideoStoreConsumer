import BackBone from 'backbone';
import $ from 'jquery';
import Rental from '../models/rental';

const RentalView = BackBone.View.extend({

initialize(params) {
  console.log('inside RentalView initalize');
  this.model = params.model;
  this.bus = params.bus;
  // this.allCustomers = params.allCustomers;
  this.listenTo(this.bus, 'pass_movie_name', this.addMovieToCheckout);
},

render() {
  console.log('Getting all customers');
  $.get('http://localhost:3000/customers?sort=name', (data) => {
    console.log(data);

    const allCustomers = data;
    allCustomers.forEach((customer) => {
      this.$('select[name="customer-name"]').append(`<option data-id="${customer.id}">${customer.name}</option>`)
    });
  });
  return this;
},

addMovieToCheckout(title) {
  // now have title of movie
  console.log("Message recieved in addMovieToCheckout");
  console.log(title);

  //TODO: scroll up not working
  // this.$('#rental-view').animate({ scrollTop: 0 }, "slow");
  // this.$('#rental-view').scrollTop(0);

  this.$('#movie-title-selector').val(title)
  const customerID = this.$('select option').attr('data-id');
  console.log(customerID);

  //create new rental
  console.log('addMovieToCheckout model:');
  console.log(this.model);
  this.model.set({title: title});
  this.model.set({customer_id: customerID});
  this.model.set({due_date: Date.today + 14});
  // this.model.set('customer_id': );
  console.log(this.model.attributes);

  //send post request to Rails API


},

});

export default RentalView;
