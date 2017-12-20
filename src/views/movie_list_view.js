import Backbone from 'backbone';
import MovieView from '../views/movie_view';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    // console.log(params);
    this.template = params.template;
    this.searchTemplate = params.searchTemplate;
    this.listenTo(this.model,"update", this.render);
    this.listenTo(this,"showSearched", this.renderSearch);

    this.listenTo(this.model,"currentInv", this.render);
  },
  render() {
    this.$('#movie').empty();

    this.model.each((movie) => {
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagName: 'article',
        className: 'movie',
      });
      this.$('#movie').prepend(movieView.render().$el);
    });
    return this;
  },

  renderSearch() {
    this.template = this.searchTemplate;
  },

  events: {
    'submit #search-movies': 'searchMovies',
    'click button.view-inventory': 'showInventory',
  },

  searchMovies: function(event) {
    event.preventDefault();
    const query = this.$('input[name=query]').val();
    this.model.fetch({data: {"query": query}});
    this.trigger('showSearched', this);
  },

  showInventory: function(event) {
    event.stopImmediatePropagation();
    this.model.fetch();
    this.trigger('currentInv');
  },
});

export default MovieListView;
