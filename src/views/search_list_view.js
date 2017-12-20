import Backbone from 'backbone';
import _ from 'underscore';
import SearchView from '../views/search_view';
import Movie from '../models/movie';
import MovieList from '../collections/movie_list';


const SearchListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },
  render() {
    this.$('#results').empty();
    console.log("in search render")
    console.log(this)
    this.model.each((movie) => {
      const searchView = new SearchView ({
        model: movie,
        template: this.template,
        tagName: 'li',
        className: 'movie'
      });

      this.$('#results').append(searchView.render().$el);
    }); // end of each loop
    return this;
  }, // end of render
  events: {
    'submit #search-form': 'getRequest',
  },
  getRequest: function (e) {
    console.log("YOU HIT THE BUTTON!");
    e.preventDefault();
    const searchParams = this.$('#searchParams').val();
    const returnedList = new MovieList();
    returnedList.searchUrl(searchParams);
    returnedList.fetch();
    console.log(returnedList)
    returnedList.render();
  },

}); // end MovieListView

export default SearchListView;
