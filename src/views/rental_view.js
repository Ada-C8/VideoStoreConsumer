import BackBone from 'backbone';
import $ from 'jquery';
import Rental from '../models/rental';

const RentalView = BackBone.View.extend({

initialize(params) {
  console.log('inside RentalView initalize');
  this.model = params.model;
  this.bus = params.bus;
  // this.allCustomers = params.allCustomers;
  this.listenTo(this.bus, 'pass_movie_name', this.addMovieTitleToCheckoutForm);
},
events: {
  'click input.btn-check-out': 'rentMovie',
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

addMovieTitleToCheckoutForm(title) {
  // now have title of movie
  console.log("Message recieved in addMovieToCheckout");
  console.log(title);

  //TODO: scroll up not working
  // this.$('#rental-view').animate({ scrollTop: 0 }, "slow");
  // this.$('#rental-view').scrollTop(0);

  this.$('#movie-title-selector').val(title)

},

rentMovie(event) {
  event.preventDefault();
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

  //send post request to Rails API
  newRental.save({}, {
    success: (model, response) => {
      console.log('Successfully rented movie');
    },
    error: (model, response) => {
      console.log('Failed to rent movie');
    },
  });

},

});

export default RentalView;
