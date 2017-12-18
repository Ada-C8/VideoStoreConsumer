import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.detailsTemplate = params.detailsTemplate;
    this.bus = params.bus;
    this.listenTo(this.bus, `displayMyDetails${this.model.get('cid')}`, this.renderMovieDetails);
  },
  render() {
    const compiledTemplate = this.template(this.model.attributes);
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click this' : 'renderDetails',
  },
  renderDetails: function(e) {
    // debugger;
    console.log('im trying to render a detail');
    e.preventDefault();
    this.renderMovieDetails(this.model);
  },
  renderMovieDetails: function(movie) {
    // debugger;
    console.log(movie);
    this.$('#movie-details').empty();
    const compiledTemplate = this.detailsTemplate(this.model.attributes);
    this.$el.html(compiledTemplate);
    this.$('#movie-details').append(this.$el);
  }


});

export default MovieView;
