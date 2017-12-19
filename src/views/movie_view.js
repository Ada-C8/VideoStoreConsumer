import Backbone from 'backbone';

const MovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
  },
  events: {
    'click button.show-details': 'slideView',
    'click button.show-form': 'slideView',
  },
  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  slideView(event) {
    if (this.$(event.target).attr('class').includes('details')) {
      this.$('.details').toggle({direction: 'right'}, 350);
    } else {
      this.$('.add-rental-form').toggle({direction: 'right'}, 350);
    }
  },
})

export default MovieView;
