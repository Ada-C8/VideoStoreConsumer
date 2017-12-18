import Backbone from 'backbone';

const VideoView = Backbone.View.extend({
  initialize(parameters) {
    this.template = parameters.template;
  },
  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    // click add to library
  },
});

export default VideoView;
