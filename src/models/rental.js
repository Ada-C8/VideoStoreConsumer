import Backbone from 'backbone';

const Rental = Backbone.Model.extend({
  // defaults
  // validations
  // custom method

  url() {
    return `http://localhost:3000/rentals/${this.get('title')}/check-out`
  },

});

export default Rental;
