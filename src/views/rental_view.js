import BackBone from 'backbone';
import $ from 'jquery';
// import LibMovie from '../models/lib_movie';

const RentalView = BackBone.View.extend({

initialize(params) {
  console.log('inside RentalView initalize');

  this.allCustomers = params.allCustomers;
},

render() {
  $.get('http://localhost:3000/customers?sort=name', (data) => {
    console.log(data);

    const allCustomers = data;
    allCustomers.forEach((customer) => {
      this.$('select[name="customer-name"]').append(`<option data-id="${customer.id}">${customer.name}</option>`)
    });
  });

  return this;
},

});

export default RentalView;
