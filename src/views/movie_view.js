import Backbone from 'backbone';
import Movie from '../models/movie';
import MovieDetailsView from '../views/movie_details_view';

const MovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.model = params.model;
    this.detailsTemplate = params.detailsTemplate;
    // Listen to changes in the model and call render when they occur.
    this.listenTo(this.model, "change", this.render);
  },
  events: {
    'click button.btn-movie-details': 'viewMovie',
  },
  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  viewMovie() {
    // console.log(this.$('#movies-container'));
    // this.$el.hide();
    console.log('viewing movie');
    const movieDetailsView = new MovieDetailsView({
      model: this.model,
      template: this.detailsTemplate,
      // tagName: 'li',
      // className: 'movie row',
      el: '#movie-details-container',
    });

    this.$('main').prepend(movieDetailsView.render().$el);
    this.$('#movie-details-container').show();
  }
});

export default MovieView;
