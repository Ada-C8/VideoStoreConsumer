import Backbone from 'backbone';
import Customer from '../models/customer';

const CustomerList = Backbone.Collection.extend({
  model: Customer,
});

export default CustomerList;
