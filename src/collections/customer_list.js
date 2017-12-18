import Backbone from 'backbone';
import Customer from '../models/customer';

const CustomerList = Backbone.Collection.extend({
  model: Customer,
  url: 'http://localhost:3000/customers',
  parse(response) {
    return response;
  },
});

export default CustomerList;
