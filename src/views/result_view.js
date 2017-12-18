import Backbone from 'backbone';

const ResultView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.model = params.model;
  },
  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
});

export default ResultView;
