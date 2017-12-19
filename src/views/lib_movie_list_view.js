import BackBone from 'backbone';
import LibMovieView from './lib_movie_view';
import LibMovie from '../models/lib_movie';

const LibMovieListView = BackBone.View.extend({

  initialize(params) {
    console.log('inside LibMovieListView initialize');
    this.template = params.template;
    this.bus = params.bus;

    this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.bus, 'add_movie_to_lib', this.addLibMovie)
  },


  addLibMovie(movie){
    console.log('Message recieved!');
    console.log(movie);
  },

  render() {
    console.log('inside lib_movie_list_view render function');

    // clearing dom
    this.$('#library-movies').empty();

    // loop through all libMovies in our collection and send them to the libMovieView

    this.model.each((libMovie) => {
      const libMovieView = new LibMovieView({
        model: libMovie,
        template: this.template,
        tagName: 'p',
        className: 'lib-movie',
      });
      this.$('#library-movies').append(libMovieView.render().$el);
    });
    return this;
  },

});

export default LibMovieListView;
