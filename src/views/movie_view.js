import $ from 'jquery';
import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.detail_template = params.detail_template;
  },

  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);

    return this;
  },

  events: {
    'click': 'showDetails',
  },

  showDetails(e) {
    $('.movie-detail').remove();
    let responseJSON;
    this.model.getByTitle();
    this.model.fetch({
      success: (r) => {
        responseJSON = r.toJSON();
        const generatedHTML = this.detail_template(responseJSON);
        this.$el.append(generatedHTML).find('.movie-detail').show(500);
      },
    });
  },
});




export default MovieView;
