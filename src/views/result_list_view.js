import Backbone from 'backbone';
import MovieView from './movie_view'

const ResultListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.model = params.model;
    this.listenTo(this.model, 'update', this.render);
  },
  events: {
    'click #search-btn': 'getResults',
  },
  render() {
    this.$('#results-list').empty();
    this.model.each((movie) => {
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagName: 'li',
        className: 'movie',
      });
      console.log(movie)
      this.$('#results-list').append(movieView.render().$el);
    });
    return this;
  },
  getResults: function(event) {
    event.preventDefault();
    const searchTerm = this.$('[name="search"]').val();
    this.model.query = searchTerm
    this.model.fetch()
  }
});

export default ResultListView;
