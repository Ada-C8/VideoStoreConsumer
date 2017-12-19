import Backbone from 'backbone';

const MovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
  },
  events: {
    'click button.show-details': 'slideView',
    'click button.show-form': 'slideView',
    'submit #add-rental': 'newInventory',
  },
  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  slideView(event) {
    if (this.$(event.target).attr('class').includes('details')) {
      this.$('.add-rental-form').hide();
      this.$('.details').toggle({direction: 'right'});
    } else {
      this.$('.details').hide();
      this.$('.add-rental-form').toggle({direction: 'right'});
    }
  },
  newInventory(event) {
    event.preventDefault();
    let quantity = this.$('#add-rental [name="inventory"]').val();
    this.bus.trigger('addInventory', this.model, quantity);
  },
})

export default MovieView;
