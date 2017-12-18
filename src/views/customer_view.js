import Backbone from 'backbone';
import Customer from '../models/customer';

const CustomerView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
  },
  render() {
    const compileTemplate = this.template(this.model.toJSON());
    this.$el.html(compileTemplate);
    return this;
  },
});

export default CustomerView;
