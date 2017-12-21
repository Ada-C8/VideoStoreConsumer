import Backbone from 'backbone';
import CustomerView from './customer_view';

const CustomerListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;

  },
  render() {
    // console.log('IN RENDER');
    // console.log(this.model);
    this.$('#list').empty();

    this.model.each((customer) => {
      const customerView = new CustomerView({
        model: customer,
        template: this.template,
        tagName: 'li',
        className: 'customer',
      });
      this.$('#list').append(customerView.render().$el);
  })
  return this;
},
  events: {
    'click #customer-button': 'render',
  }
});

export default CustomerListView;
