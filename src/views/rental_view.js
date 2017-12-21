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

    this.$('#movie-title-selector').val(title)
  },

  rentMovie(event) {
    event.preventDefault();

    let modelAttributes = this.getFormDataMakeObj();
    console.log('model attributes');
    console.log(modelAttributes);

    // client side validation
    const newRental = new Rental(modelAttributes);
    if (!newRental.isValid()) {
      console.log(`rental is not valid!`);
      this.statusUpdate(newRental.validationError);
      return;
    }

    // server side validation
    // send post request to Rails API
    newRental.save({}, {
      success: (model, response) => {
        console.log('Successfully rented movie');
        this.statusUpdate({title: `Successfully checked out the movie ${model.attributes.title} to customer # ${model.attributes.customer_id}`})
      },
      error: (model, response) => {
        console.log('Failed to rent movie');
        this.statusUpdate(response.responseJSON['errors']);
        console.log(response.responseJSON['errors']);
      },
    });
  },

  // helper function to grab form data and return obj attributes
  getFormDataMakeObj(){
    console.log('in getFormDataMakeObj method');
    // get customer ID and title out of form
    const customerID = this.$('form#check-out-form select').find(":selected").attr('data-id');
    console.log(customerID);
    const title = this.$('form#check-out-form input').val();
    console.log(title);

    //create new rental
    console.log('addMovieToCheckout model:');

    let dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 14);

    const modelAttributes = {
      title: title,
      customer_id: customerID,
      due_date: dueDate,
    };
    return modelAttributes
  },

  statusUpdate(statusObj) {
    // clear messages
    console.log('inside statusUpdate');

    const $statusMessages = this.$('#rental-messages');

    this.clearStatus();

    Object.keys(statusObj).forEach((key) => {
      $statusMessages.append(`<p>${key}: ${statusObj[key]}</p>`);
    })
  },

  clearStatus(){
    this.$('#rental-messages').html('');
  },

});

export default RentalView;
