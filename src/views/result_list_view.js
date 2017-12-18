import Backbone from 'backbone';

import ResultView from './result_view';

const ResultListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.model = params.model;
    this.listenTo(this.model, 'update', this.render);
  },
  render() {
    this.$('#results').empty();
    this.model.each((result) => {
      const resultView = new ResultView({
        model: result,
        template: this.template,
        tagName: 'li',
        className: 'result',
      });
      this.$('#results').append(resultView.render().$el);
    });
    return this;
  }
});

export default ResultListView;
