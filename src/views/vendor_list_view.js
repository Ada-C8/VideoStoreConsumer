import Backbone from 'backbone';
// import _ from 'underscore';

import VendorView from '../views/vendor_view';
// import OrderView from '../views/order_view';
// import Quote from '../models/quote';
// import Movie from '../models/movie';

const VendorListView = Backbone.View.extend({
  initialize(params) {
  this.bus = params.bus;
  this.template = params.template;
  this.detailsTemplate = params.detailsTemplate;
  this.inventory = params.inventory;
  this.vendorViews = []

  this.listenTo(this.model, 'update', this.render);
  },

  render() {
    this.$('#vendor-results').empty();
    this.vendorViews.forEach(view => view.remove());

    this.model.each((movie) => {
      const vendorView = new VendorView({
        model: movie,
        template: this.template,
        inventory: this.inventory,
        detailsTemplate: this.detailsTemplate,
        bus: this.bus,
        tagName: 'li',
        className: 'movie',
      });
      this.vendorViews.push(vendorView);
      this.$('#vendor-results').append(vendorView.render().$el);
    });
  },
});

export default VendorListView;
