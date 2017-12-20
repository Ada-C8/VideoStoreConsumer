import Backbone from 'backbone';
import _ from 'underscore';
import MovieView from '../views/movie_view';
import Movie from '../models/movie';
import MovieList from '../collections/movie_list';


const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.searchTemplate = params.searchTemplate;
    this.listenTo(this.model, 'update', this.render);
  },
  render() {
    this.$('#movies').empty();
    // this.model.fetch();
    this.model.each((movie) => {
      const movieView = new MovieView ({
        model: movie,
        template: this.template,
        searchTemplate: this.searchTemplate,
        tagName: 'li',
        className: 'movie'
      });

      this.$('#movies').append(movieView.render().$el);
    }); // end of each loop
    return this;
  }, // end of render
  events: {
    'click button.api-movies': 'getMovies',
    // 'submit #search-form': 'getRequest',
  },
  getMovies: function (e) {
    this.model.fetch();
  },

  // getRequest: function (e) {
  //   console.log("YOU HIT THE BUTTON!");
  //   e.preventDefault();
  //   const searchParams = this.$('#searchParams').val();
  //   const returnedList = new MovieList();
  //   returnedList.searchUrl(searchParams);
  //   returnedList.fetch();
  //   console.log("THIS IS returnedList");
  //   console.log(returnedList);
  //   this.$('#movies').empty();
  //   // this.model.fetch();
  //   returnedList.each((movie) => {
  //     const movieView = new MovieView ({
  //       model: movie,
  //       searchTemplate: this.searchTemplate,
  //       tagName: 'li',
  //       className: 'movie'
  //     });
  //   const seeSearchTemp = this.searchTemplate(returnedList);
  //   this.$('#results').prepend(seeSearchTemp);
  // });
  // },

}); // end MovieListView

export default MovieListView;
