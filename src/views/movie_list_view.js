import Backbone from 'backbone';
import MovieView from './movie_view';
import Movie from '../models/movie';
import Search from '../models/search';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;

    this.listenTo(this.model, 'update', this.render);
    this.listenTo();
  },
  render() {
    this.$('ul').empty();

    this.model.forEach((movie) => {
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagName: 'li',
        className: 'movie',
      });
      this.$(' ul').append(movieView.render().$el);
    });

    return this;
  },
  events: {
    'click button#search': 'searchQuery',
  },
  // function
  // get form data
  // add a new search
  // for each parse results and add
  searchQuery(event) {
    event.preventDefault();
    console.log("Doing a search");
    let query = this.$('#search-form input').val();
    console.log(query);
    let search = new Search({query: query});
    let results = search.fetch();

    console.log(search);
    console.log(results);

    this.$('#search-form input').val('');
  },
  // getSearchQuery() {
  //   const val = $('#search-form input').val();
  //   return val;
  // },
  // clearSearchQuery() {
  //   const val = $('#search-form input').val('');
  // },
});

export default MovieListView;
