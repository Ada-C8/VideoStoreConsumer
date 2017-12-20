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
  // $('body').animate({ scrollTop: 0 }, "slow");
  $('body').scrollTop(0);

  this.$('#movie-title-selector').val(title)
  const customerID = this.$('select option').attr('data-id');
  console.log(customerID);

  //create new rental
  console.log('addMovieToCheckout model:');
  console.log(this.model);

  let dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + 14);

  const modelAttributes = {
    title: title,
    customer_id: customerID,
    due_date: dueDate,
  };

  console.log('model attributes');
  console.log(modelAttributes);

  const newRental = new Rental(modelAttributes);
  // console.log( newRental.url)
  // newRental.url += title + '/check-out'
  //send post request to Rails API
  newRental.save({}, {
  })

},

});

export default RentalView;
