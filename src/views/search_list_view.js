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
    e.preventDefault();
    const searchParams = this.$('#searchParams').val();
    this.model.fetch({data: {query: searchParams}});
  },
  // addMovie: function(e) {
  //   e.preventDefault();
  //   const id = $(e.currentTarget).data("external_id");
  //   console.log(id)
  //   const movie = this.model.get(id)
  //   movie.save();
    // this.model.each((movie) => {
    //   console.log(movie);
    //   console.log(movie.attributes.title)
    //   const newMovie = movie.attributes
    //   newMovie.save();
    // });
  // },

}); // end MovieListView

export default SearchListView;
