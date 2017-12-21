import Backbone from 'backbone';
import MovieView from './movie_view';
import Movie from '../models/movie';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
    this.collection = params.collection;

    this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.collection, 'update', this.render);

    this.mode = "inventory";
  },

  inventoryMode() {
    this.mode = "inventory";
  },

  searchMode() {
    this.mode = "search";
  },

  events: {
    "click li.movie" : "toggleHighlight"
  },

  toggleHighlight(event) {
    let active = event.currentTarget;
    this.$el.find('li.movie').attr('class', 'movie highlighted');
    this.$el.find('li.movie').not(active).attr('class', 'movie');
  },

  render() {
    this.$('ul').empty();

    if (this.mode == "search") {
      this.collection.forEach((movie) => {
        const movieView = new MovieView({
          bus: this.bus,
          model: movie,
          template: this.template,
          tagName: 'li',
          className: 'movie',
          collection: this.model,
        });
        this.$('ul').append(movieView.render().$el);
      });
    } else if (this.mode == "inventory"){
      this.model.forEach((movie) => {
        const movieView = new MovieView({
          bus: this.bus,
          model: movie,
          template: this.template,
          tagName: 'li',
          className: 'movie',
          collection: this.model,
        });
        this.$('ul').append(movieView.render().$el);
      });
    } else {
      console.error(`Invalid movie list mode ${this.mode}`);
    }
    return this;
  },
});

export default MovieListView;
