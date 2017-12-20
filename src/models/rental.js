import Backbone from 'backbone';

const Rental = Backbone.Model.extend({
  validate(attributes) {
    const errors = {};

    if (!attributes.title) {
      errors.title = ['cannot be blank'];
    }

    if (!attributes.customer_id) {
      errors.customer_id = ['cannot be blank'];
    }

    if (!attributes.due_date) {
      errors.due_date = ['cannot be blank'];
    }

    if (Object.keys(errors).length < 1) {
      return false;
    }

    return errors;
  },

  url() {
    return `http://localhost:3000/rentals/${this.get('title')}/check-out`
  },
});

export default Rental;
