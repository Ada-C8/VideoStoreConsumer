import Backbone from 'backbone';

const MovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.model = params.model;
    this.library = params.library;
  },
  events: {
    'click #add-btn': 'addToLibrary',
  },
  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  addToLibrary() {
    console.log(this.model);
    this.library.add(this.model);
    this.model.save();
  }
});

export default MovieView;
