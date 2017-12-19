import Backbone from 'backbone';
import MovieView from './movie_view';
// import Movie from '../models/movie';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;

  },
  render() {
    console.log('IN RENDER');
    console.log(this.model);
    this.$('#list').empty();

    this.model.each((movie) => {
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagName: 'li',
        className: 'movie',
      });
      this.$('#list').append(movieView.render().$el);
  })
  return this;
},
submit(event) {
  event.preventDefault();

  const searchType = this.$('input[name=search-type]:checked').val();
  const searchTerm = this.$('input[name=search]').val().toUpperCase();
  const regSearchTerm = this.$('input[name=search]').val();

  if (searchType === 'search inventory') {
    // refactor these into two seperate methods??
    const movieList = this.model.models;
    const filteredMovies = movieList.filter(movie => movie.get('upperCaseTitle').includes(searchTerm));

    this.$('#list').empty();

    filteredMovies.forEach((movie) => {
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagName: 'li',
        className: 'movie',
      });
      this.$('#list').append(movieView.render().$el);
    });
    return this;
  } else {
    console.log('Searching Imdb...');
    // this.model.url = `http://localhost:3000/movies/?query=${regSearchTerm}`;
    // console.log(`http://localhost:3000/movies/?query=${regSearchTerm}`);
    console.log(this.model);
    const imdbList = this.model.fetch({data: {query: regSearchTerm}});
    console.log(imdbList);
    // this.listenTo(this.model, 'change', this.render);
    // imdbList.done((...options) => {
    //   console.log(options);

     imdbList.then((data, status, response) => {

       this.model.models.forEach((movie) => {
         const movieView = new MovieView({
           model: movie,
           template: this.template,
           tagName: 'li',
           className: 'movie',
         });
         this.$('#list').append(movieView.render().$el);
       });
     });
}

  //   this.$('#list').empty();
  //
  //   imdbList.forEach((movie) => {
  //     const movieView = new MovieView({
  //       model: movie,
  //       template: this.template,
  //       tagName: 'li',
  //       className: 'movie',
  //     });
  //     this.$('#list').append(movieView.render().$el);
  //   });
  //   return this;
  // }

},
  events: {
    'click #movie-button': 'render',
    'click #searchButton': 'submit'
  }
});

export default MovieListView;
