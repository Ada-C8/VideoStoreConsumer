import Backbone from 'backbone';


const Rental = Backbone.Model.extend({
  initialize(attributes) {
  },
  validate(attributes) {
    const errors = {};

    if (!attributes.due_date) {
      errors['due_date'] = ['Due Date is required'];
    }
  }

});

export default Rental;
