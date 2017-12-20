import BackBone from 'backbone';
// import SearchMovie from '../models/search_movie';
// import SearchMovieView from './search_movie_view';
import LibMovie from '../models/lib_movie';
import LibMovieView from './lib_movie_view';

const SearchMovieListView = BackBone.View.extend({

  initialize(params) {
    this.template = params.template;
    this.bus = params.bus;
    // this.allCustomers = params.allCustomers;

    this.listenTo(this.model, 'update', this.render);
  },

  events: {
    'submit': 'searchMovies',
    'click button.btn-add-movie': 'addMovie',
  },

  addMovie(event){
    console.log('clicked on add movie button');
    console.log(event);

    // get external_id
    let externalId = parseInt(event.currentTarget.classList[2]);


    console.log(externalId);
    // find the movie from our collection
    let searchMovie = this.model.findWhere({external_id: externalId});

    console.log(searchMovie);
    // send message and movie to LibMovieListView
    this.bus.trigger('add_movie_to_lib', searchMovie);
  },

  searchMovies(event){
    console.log('In searchMovies');
    this.clearStatus();
    event.preventDefault();
    // changes url back to base URL
    // TODO: update url
    this.model.url = 'http://localhost:3000/movies?query=';

    const searchMovieTitle = this.$('#search-movie-title').val();

    if (searchMovieTitle === '') {
      this.statusUpdate('Please enter a search term.');
    } else {
      console.log(this.model);
      // add searchterm to end of url so we can send it to RoR app
      this.model.url += searchMovieTitle;


      this.model.fetch().then((response) => {
        console.log('response');
        console.log(response);
        if (response.length < 1) {
          this.statusUpdate('No search results, please try again.');
        }
      });
    }
  },

  statusUpdate(message) {
    // clear messages
    console.log('inside statusUpdate');

    const formattedMessage = `<p>${message}</p>`;
    this.$('#messages').append(formattedMessage);
  },

  clearStatus(){
    this.$('#messages').html('');
  },

  render() {
    console.log('inside search_movie_list_view render function');

    this.$('#search-movies').empty();

    this.model.each((searchMovie) => {
      const searchMovieView = new LibMovieView({
        model: searchMovie,
        template: this.template,
        tagName: 'p',
        className: 'search-movie',
      });
      this.$('#search-movies').append(searchMovieView.render().$el);
    });
    return this;
  },
});

export default SearchMovieListView;
