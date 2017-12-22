import Backbone from 'backbone';
import CustomerView from './customer_view';

const CustomerListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
    this.listenTo(this.model, 'update', this.render);
  },
  render() {
    const list = this.$('#customers');
    list.empty();

    this.model.each((customer) => {
      const customerView = new CustomerView({
        model: customer,
        template: this.template,
        tagName: 'li',
        className: 'customer',
        bus: this.bus,
      });
      list.append(customerView.render().$el);
    });
    return this;
  },
});

export default CustomerListView;
