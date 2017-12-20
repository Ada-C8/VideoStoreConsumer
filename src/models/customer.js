import Backbone from 'backbone';

const Customer = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/customer',
});

export default Customer;
